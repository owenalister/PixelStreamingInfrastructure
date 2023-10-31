class rtmClient {
    constructor(clientAgora) {
        this.clientAgora = clientAgora;
    }

    async requestRtmToken() {
        user.rtm = await am.getRTMToken();
        return user.rtm;
    }

    async login (accountName, token) {
        this.accountName = accountName
        return this.client.login({ uid: this.accountName, token })
    }

    async logout () {
        return this.client.logout()
    }

    getRtmToken() {
        return user.rtm.token;
    }

    getUid() {
        return user.rtm.uid;
    }

    getAppId() {
        return user.rtm.appId;
    }

    getAgoraSecret() {
        return user.rtm.agoraSecret;
    }

    getAgoraSalt() {
        return user.rtm.agoraSalt;
    }
}