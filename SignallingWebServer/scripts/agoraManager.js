class AgoraManager {
    constructor() {
        this.isHUDEnabled = false;
        if (this.isHUDEnabled === true) {
            this.generalChannel = 'general';

            this.clientAgora = AgoraRTC.createClient({
                mode: "rtc",
                codec: "vp8"
            });

            this.localAgoraTracks = {
                videoTrack: null,
                audioTrack: null
            };

            this.callControls = new CallControls(this.clientAgora);
            this.audioControls = new AudioControls(this.clientAgora);
            this.globalCallbacks = new GlobalCallbacks();

            this.channelInfo = null;
            this.clientCallbacks = null;
            this.rtm = null

            AgoraRTC.setLogLevel(0);
        }
    }

    //call after join channel
    init() {
        // this.channelInfo = new ChannelInfo(this.clientAgora);
        // this.clientCallbacks = new ClientCallbacks(this.clientAgora);
        this.rtm = new rtmClient(this.clientAgora).requestRtmToken();
        let rtm = new RTMClient();
        rtm.init(this.rtm.appId);

        rtm.on('ChannelMessage', async ({channelName, args}) => {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>");
            console.log(channelName);
            console.log(args);
        });
    }

    getVersion() {
        return AgoraRTC.VERSION;
    }

    fetchOptions(channelName, userName) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/agora/channeltoken', {
                    "channel": channelName,
                    "uid": userName
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }

    getRTMToken() {
        return new Promise(function(resolve) {
            axios.post('https://vqpd9w0uvg.execute-api.eu-west-1.amazonaws.com/staging/agora/rtmtoken', {
                "uid": user.display_name
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }

    async getChannels(region, environment) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/channels/list', {
                "region": region,
                "environment": environment
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }

    async getChannelInfo(region, environment, channelName) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/channels/get', {
                "Region": region,
                "Environment": environment,
                "Name": channelName
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }

    createNewChannel(region, environment, name, isPrivate = false){
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/channels/add', {
                "Region": region,
                "Environment": environment,
                "Owner": user.rtm.uid,
                "Name": name
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(function(response) {
                const output = response.data;
                resolve(output);
                $('#modalCreateChannel').modal('hide');
            }).catch(function(error) {
                console.log(error);
            });
        })
    }



    updateMembers(region, environment, name, action = 'join'){
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/server/channels/updatechannel', {
                "Region": region,
                "Environment": environment,
                "Name": name,
                "Action": action,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(function(response) {
                const output = response.data;
                resolve(output);
            }).catch(function(error) {
                console.log(error);
            });
        })
    }

    login(accountName, token) {
        return new Promise(function(resolve) {
            axios.post('https://ui9fvt6wgb.execute-api.eu-west-1.amazonaws.com/Dev3/agora/rtmtoken', {
                "uid": accountName,
                "token": token
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(function(response) {
                    const output = response.data;
                    resolve(output);
                })
                .catch(function(error) {
                    console.log(error);
                });
        })
    }

}

let am = new AgoraManager();