class ChannelInfo {
    constructor(clientAgora) {
        this.clientAgora = clientAgora;
    }

    getCurrentChannelName() {
        return this.clientAgora.channelName;
    }

    getCurrentLocalUid() {
        return this.clientAgora.uid;
    }

    getCurrentConnectionState() {
        return this.clientAgora.connectionState
    }

    //A list of the remote users in the channel, each of which includes the user ID and the corresponding track information.
    getCurrentRemoteUsers() {
        return this.clientAgora.remoteUsers;
    }

    //The list of the local tracks that the local user is publishing.
    getCurrentPublishedLocalTracks() {
        return this.clientAgora.localTracks;
    }
}