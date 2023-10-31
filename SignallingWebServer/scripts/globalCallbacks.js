class GlobalCallbacks {
    constructor() {
        // if (am.isHUDEnabled === true) {
            //Occurs when an audio sampling device is added or removed.
            AgoraRTC.onMicrophoneChanged = (info) => {
                this.handleOnMicrophoneChanged(info);
            };

            //Occurs when an audio playback device is added or removed.
            AgoraRTC.handleOnPlaybackDeviceChanged = (info) => {
                this.handleOnPlaybackDeviceChanged(info);
            };

            //Occurs when the autoplay of an audio track or a video track fails.
            AgoraRTC.onAutoplayFailed = () => {
                this.handleOnAutoplayFailed();
            };

            //Occurs when a video capture device is added or removed.
            AgoraRTC.onCameraChanged = (info) => {
                this.handleOnCameraChanged(info);
            };
        // }
    }

    handleOnMicrophoneChanged(info) {
        console.log("microphone changed!", info.state, info.device);
    }

    handleOnPlaybackDeviceChanged(info) {
        console.log("speaker changed!", info.state, info.device);
    }

    
    handleOnAutoplayFailed() {
        console.log("autoplay failed");
        //do something in ui
    }

    handleOnCameraChanged(info) {
        console.log("camera changed!", info.state, info.device);
    }
}