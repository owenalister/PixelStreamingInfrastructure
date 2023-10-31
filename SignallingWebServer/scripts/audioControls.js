class AudioControls {
    constructor(clientAgora) {
        this.clientAgora = clientAgora;
    }

    setAgoraTracks(localAgoraTracks) {
        this.localAgoraTracks = localAgoraTracks
    }

    setLocalAudioTrackVolume(value) {
        this.localAgoraTracks.audioTrack.then(track => {
            track.setVolume(value);
        });
    }

    muteLocalAudioTrack() {
        this.localAgoraTracks.audioTrack.then(track => {
            track.setVolume(0);
        });
    }

    unmuteLocalAudioTrack() {
        this.localAgoraTracks.audioTrack.then(track => {
            track.setVolume(100);
        });
    }

    async unpublishLocalAudioTrack() {
        await this.clientAgora.unpublish(localAgoraTracks.audioTrack);
    }

    async unpublishAllLocalTracks() {
        await this.clientAgora.unpublish();
    }

    async publishLocalAudioTrack() {
        await this.clientAgora.publish(Object.values(localAgoraTracks.audioTrack));
    }

    async publishAllTracks() {
        await this.clientAgora.publish(Object.values(localAgoraTracks));
    }    
}