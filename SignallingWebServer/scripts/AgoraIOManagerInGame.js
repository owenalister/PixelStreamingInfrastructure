class AgoraIOWrapInGame {
    constructor() {

        this.client = AgoraRTC.createClient({
            mode: "rtc",
            codec: "vp8"
        });

        this.localTracks = {
            audioTrack: null
        };

        this.remoteUsers = {};

        this.CurrentInputDevice_ID = "";
        this.CurrentOutputDevice_ID = "";
        

        // Agora client options
        this.options = {
            appid: null,
            channel: null,
            uid: null,
            token: null,
        };

    }


    fetchAgoraVoiceToken(UserName, channelName) {
        let TokenURL = "https://r6j5tqllmd.execute-api.us-east-1.amazonaws.com/dev/getvoicetoken";
        return new Promise(function (resolve, reject) {
            axios.post(TokenURL, {
                UserName: UserName,
                RoomID: channelName
            }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
                .then(function (response) {

                    if (200 == response.data.statusCode) {
                        const token = response.data.body
                        resolve(token);
                    }
                    else {
                        reject(response.data.body)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }


    async join(channel, token, username) {

        let agoraio_appid = "1cdb7e6d71e74d369fdde46a21c68131";

        // add event listener to play remote tracks when remote user publishs.
        this.client.on("user-published", this.handleUserPublished.bind(this));
        this.client.on("user-unpublished", this.handleUserUnpublished.bind(this));

        this.client.on("user-joined", this.handleUserJoined.bind(this));
        this.client.on("user-left", this.handleUserLeft.bind(this));

        this.client.on("volume-indicator", this.handleVolumeIndicator.bind(this));

        this.options.channel = channel
        this.options.token = token

        this.options.uid = await this.client.join(agoraio_appid, channel, token, username)

        this.client.enableAudioVolumeIndicator()
        
    }

    async openMic()
    {
        this.localTracks.audioTrack = await AgoraRTC.createMicrophoneAudioTrack()

        console.log(this.options.uid);
        console.log(this.localTracks.audioTrack);

        if (this.client.connectionState === 'CONNECTED') {
            // publish local tracks to channel
            await this.client.publish(Object.values(this.localTracks));
            console.log("publish success");
        }else{
            console.log("publish failed....");
        }
    }

    async updateDevice(CurrentInputDevice_ID,CurrentOutputDevice_ID)
    {

        //check input device id
        let lists_getMicrophones = await AgoraRTC.getMicrophones();
        console.log("Microphones:");
        console.log(lists_getMicrophones);

        let find_CurrentInputDevice = false;
        lists_getMicrophones.forEach((item)=>{
            if(CurrentInputDevice_ID==item.deviceId)
            {
                find_CurrentInputDevice = true;
            }
        })
        if(find_CurrentInputDevice)
        {
            this.CurrentInputDevice_ID = CurrentInputDevice_ID;
            if(this.localTracks.audioTrack)
            {
                await this.localTracks.audioTrack.setDevice(CurrentInputDevice_ID)
            }
        }

        //check output device id
        let lists_getPlaybackDevices = await AgoraRTC.getPlaybackDevices();
        console.log("PlaybackDevices:");
        console.log(lists_getPlaybackDevices);

        let find_CurrentOutDevice = false;
        lists_getPlaybackDevices.forEach((item)=>{
            if(CurrentOutputDevice_ID==item.deviceId)
            {
                find_CurrentOutDevice = true;
            }
        })
        if(find_CurrentOutDevice)
        {
            this.CurrentOutputDevice_ID = CurrentOutputDevice_ID;

            Object.values(this.remoteUsers).forEach(async (user) => {
                if(user.audioTrack && this.CurrentOutputDevice_ID!="" && this.CurrentOutputDevice_ID!="default" )
                {
                    try {
                        await user.audioTrack.setPlaybackDevice(this.CurrentOutputDevice_ID);
                    } catch (error) {
                        console.log(error)
                    }
                    
                }
              });

            
        }

    }

    async leave() {
        for (const trackName in this.localTracks) {
            var track = this.localTracks[trackName];
            if (track) {
                track.stop();
                track.close();
                this.localTracks[trackName] = undefined;
            }
        }

        // remove remote users and player views
        this.remoteUsers = {};
        //$("#remote-playerlist").html("");

        // leave the channel
        await this.client.leave();

        //$("#local-player-name").text("");
        //$("#join").attr("disabled", false);
        //$("#leave").attr("disabled", true);
        console.log("client leaves channel success");
    }

    async muteAudio(mute){
        if (!this.localTracks.audioTrack) return;
        this.localTracks.audioTrack._originMediaStreamTrack.enabled = !mute;
        //await this.localTracks.audioTrack.setMuted(mute);
    }


    /*
     * Add the local use to a remote channel.
     *
     * @param  {IAgoraRTCRemoteUser} user - The {@link  https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/iagorartcremoteuser.html| remote user} to add.
     * @param {trackMediaType - The {@link https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/itrack.html#trackmediatype | media type} to add.
     */
    async subscribe(user, mediaType) {
        const uid = user.uid;
        // subscribe to a remote user
        await this.client.subscribe(user, mediaType);
        console.log("subscribe success");
        if (mediaType === 'audio') {
            if(this.CurrentOutputDevice_ID!="" && this.CurrentOutputDevice_ID!="default" )
            {
                try {
                    await user.audioTrack.setPlaybackDevice(this.CurrentOutputDevice_ID)
                } catch (error) {
                    console.log(error)
                }
            }
            
            user.audioTrack.play();
        }
    }

    /*
     * Add a user who has subscribed to the live channel to the local interface.
     *
     * @param  {IAgoraRTCRemoteUser} user - The {@link  https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/iagorartcremoteuser.html| remote user} to add.
     * @param {trackMediaType - The {@link https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/itrack.html#trackmediatype | media type} to add.
     */
    async handleUserPublished(user, mediaType) {
        console.log("handleUserPublished");
        const id = user.uid;
        this.remoteUsers[id] = user;
        await this.subscribe(user, mediaType);
    }

    /*
     * Remove the user specified from the channel in the local interface.
     *
     * @param  {string} user - The {@link  https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/iagorartcremoteuser.html| remote user} to remove.
     */
    async handleUserUnpublished(user, mediaType) {
        console.log("handleUserUnpublished");
        if (mediaType === 'audio') {
            const id = user.uid;
            delete this.remoteUsers[id];
            //$(`#player-wrapper-${id}`).remove();

        }
    }

    async handleUserJoined(user) {
        console.log("handleUserJoined");
        const id = user.uid;
        emitUIInteraction({
            payloadType: "OnUserJoined",
            payload: {
                "Channel_ID": this.options.channel,
                "Uid":id,
            }
        })
    }

    async handleUserLeft(user, reason) {
        console.log("handleUserLeft");
        const id = user.uid;
        emitUIInteraction({
            payloadType: "OnUserOffline",
            payload: {
                "Channel_ID": this.options.channel,
                "Uid":id,
            }
        })
    }

    
    
    handleVolumeIndicator(volumes) {
        volumes.forEach((volume) => {
            console.log(`UID ${volume.uid} Level ${volume.level}`);
            if (this.options.uid == volume.uid && volume.level > 5) {
                //self start talking
                emitUIInteraction({
                    payloadType: "OnUserTalking",
                    payload: {
                        "Channel_ID": this.options.channel,
                        "Uid":volume.uid,
                        "IsTalking":true
                    }
                })
            } else if (this.options.uid == volume.uid && volume.level < 5) {
                //self stop talking
                emitUIInteraction({
                    payloadType: "OnUserTalking",
                    payload: {
                        "Channel_ID": this.options.channel,
                        "Uid":volume.uid,
                        "IsTalking":false
                    }
                })
            }
            if (this.options.uid != volume.uid && volume.level > 5) {
                //other start talking
                emitUIInteraction({
                    payloadType: "OnUserTalking",
                    payload: {
                        "Channel_ID": this.options.channel,
                        "Uid":volume.uid,
                        "IsTalking":true
                    }
                })
            } else if (this.options.uid != volume.uid && volume.level < 5) {
                //other stop talking
                emitUIInteraction({
                    payloadType: "OnUserTalking",
                    payload: {
                        "Channel_ID": this.options.channel,
                        "Uid":volume.uid,
                        "IsTalking":false
                    }
                })
            }
        });
    }

}

class AgoraIOManagerInGame {

    constructor() {
        this.channelinfo={}
        this.CurrentInputDevice = {
            "Name":"",
            "ID":""
        };
        this.CurrentOutputDevice = {
            "Name":"",
            "ID":""
        };
    }

    async joinChannel(user_name,channel_name){
        
        let warp = new AgoraIOWrapInGame()
        this.channelinfo[channel_name+":"+user_name] = warp

        let token = await warp.fetchAgoraVoiceToken(user_name,channel_name)
        await warp.join(channel_name,token,user_name)
        await warp.openMic()
        await warp.updateDevice(this.CurrentInputDevice.ID,this.CurrentOutputDevice.ID)
        console.log("default is mute");
        await warp.muteAudio(true)
        
        return warp.options.uid;
    }

    async leaveChannel(user_name,channel_name){
        let warp = this.channelinfo[channel_name+":"+user_name]
        
        if(warp){
            await warp.leave()
            delete this.channelinfo[channel_name+":"+user_name]
        }
    }

    async UserTalking(user_name,channel_name,IsPressedRecordKey){
        console.log("UserTalking",user_name,channel_name,IsPressedRecordKey)

        for(let key in this.channelinfo){
            let warp = this.channelinfo[key]
            await warp.muteAudio(!IsPressedRecordKey)
        }
    }

    async SetInputDevice(info)
    {
        this.CurrentInputDevice.Name = info.Name;
        this.CurrentInputDevice.ID = info.ID;
        for(let key in this.channelinfo){
            let warp = this.channelinfo[key]
            await warp.updateDevice(this.CurrentInputDevice.ID,this.CurrentOutputDevice.ID)
            await warp.muteAudio(true)
        }
        
    }

    async SetOutputDevice(info)
    {
        this.CurrentOutputDevice.Name = info.Name;
        this.CurrentOutputDevice.ID = info.ID;
        for(let key in this.channelinfo){
            let warp = this.channelinfo[key]
            await warp.updateDevice(this.CurrentInputDevice.ID,this.CurrentOutputDevice.ID)
            await warp.muteAudio(true)
        }
        
    }

    async GetVoiceDeviceInfo(){
        let lists_getMicrophones = await AgoraRTC.getMicrophones();
        console.log("Microphones:");
        console.log(lists_getMicrophones);

        let need_update_CurrentInputDevice = true;
        lists_getMicrophones.forEach((item)=>{
            if(this.CurrentInputDevice.ID==item.deviceId)
            {
                need_update_CurrentInputDevice = false;
            }
        })
        if(need_update_CurrentInputDevice==true)
        {
            lists_getMicrophones.forEach((item)=>{
                if("default"==item.deviceId)
                {
                    this.CurrentInputDevice.ID="default";
                    this.CurrentInputDevice.Name=item.label;
                }
            })
        }

        let AllInputDevice = [];
        lists_getMicrophones.forEach((item)=>{
            if("default"!=item.deviceId && "communications"!=item.deviceId)
            {
                AllInputDevice.push( {
                    "Name":item.label,
                    "ID":item.deviceId
                });                 
            }
        })

    
        let lists_getPlaybackDevices = await AgoraRTC.getPlaybackDevices();
        console.log("PlaybackDevices:");
        console.log(lists_getPlaybackDevices);

        let need_update_CurrentOutputDevice = true;
        lists_getPlaybackDevices.forEach((item)=>{
            if(this.CurrentOutputDevice.ID==item.deviceId)
            {
                need_update_CurrentOutputDevice = false;
            }
        })
        if(need_update_CurrentOutputDevice==true)
        {
            lists_getPlaybackDevices.forEach((item)=>{
                if("default"==item.deviceId)
                {
                    this.CurrentOutputDevice.ID="default";
                    this.CurrentOutputDevice.Name=item.label                    ;
                }
            })
        }
        let AllOutputDevice = [];
        lists_getPlaybackDevices.forEach((item)=>{
            if("default"!=item.deviceId && "communications"!=item.deviceId)
            {
                AllOutputDevice.push( {
                    "Name":item.label,
                    "ID":item.deviceId
                });                 
            }
        })

        let resp = {
            payloadType: "OnGetDeviceInfo",
            payload: {
                "CurrentInputDevice": this.CurrentInputDevice,
                "CurrentOutputDevice":this.CurrentOutputDevice,
                "AllInputDevice":AllInputDevice,
                "AllOutputDevice":AllOutputDevice,
            }
        }

        console.log(resp)

        emitUIInteraction(resp)
    }


}

let instAgoraIOManagerInGame = new AgoraIOManagerInGame()
