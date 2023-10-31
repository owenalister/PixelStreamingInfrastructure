class CallControls {
    constructor(clientAgora) {
        this.clientAgora = clientAgora;
    }

    //Join create audio,video traks
    async joinChannel(channelName, userName) {
        var agoraOptions = await am.fetchOptions(channelName, userName);
     
         // join a channel and create local tracks, we can use Promise.all to run them concurrently
         var ret = await Promise.all([
             // join the channel
             am.clientAgora.join(agoraOptions.appId, 
              channelName, 
              agoraOptions.token || null,
              userName),
             // create local tracks, using microphone and camera
             AgoraRTC.createMicrophoneAudioTrack(),
             AgoraRTC.createCameraVideoTrack()
         ]);

         return ret;
     }

    //Leaves a channel.
    //When leaving the channel, the AgoraRTCClient.on("connection-state-change") callback is triggered on the local client.
    async leaveChannel() {
        await this.clientAgora.leave();
    }

    // Close audio,video tracks
    async closeTracks() {
        for (trackName in am.localAgoraTracks) {
        var track = am.localAgoraTracks[trackName];
            if(track) {
                track.stop();
                track.close();
                am.localAgoraTracks[trackName] = undefined;
            }
        }
    }

    async closeAudioTrack() {
        am.localAgoraTracks.audioTrack.stop();
        am.localAgoraTracks.audioTrack.close();
        am.localAgoraTracks.audioTrack = undefined;
    }

    // Stop audio,video tracks
    async stopTracks() {
        for (trackName in am.localAgoraTracks) {
          var track = am.localAgoraTracks[trackName];
          if(track) {
            track.stop();
          }
        }
    }

    async closeVideoTrack() {
        am.localAgoraTracks.videoTrack.stop();
    }

}