class ClientCallbacks {
    constructor(clientAgora) {
        this.clientAgora = clientAgora;

        //If the encryption configurations are incorrect, the SDK triggers callback when publishing tracks.
        this.clientAgora.on("crypt-error", this.handleCryptError);

        //Occurs when the state of the connection between the SDK and the server changes.
        this.clientAgora.on("connection-state-change", async (curState, revState, reason) => {
            console.log("connection-state-change");
        })

        //Occurs when a remote user publishes an audio or video track.
        this.clientAgora.on("user-published", async (user, mediaType) => {
            console.log("user published");
        })

        //Occurs when a remote user unpublishes an audio or video track.
        this.clientAgora.on("user-unpublished", async (user, mediaType) => {
            console.log("user unpublished");
        })

        //Reports exceptions in the channel.
        //Exceptions are not errors, but usually reflect quality issues.
        //This callback also reports recovery from an exception.
        //Each exception corresponds to a recovery event.
        this.clientAgora.on("exception", async (event) => {
            console.log("Exception");
            console.log("event code: ", event.code);
            console.log("event msg: ", event.msg);
        })

        //Occurs when a remote user or host joins the channel.
        this.clientAgora.on("user-joined", async (user) => {
            console.log("User joined uid: ", user.uid);
        })

        //Occurs when a remote user becomes offline.
        this.clientAgora.on("user-left", async (user, reason) => {
            console.log("User left uid: ", user.uid);
            console.log("Reason: ", user.reason);
        })

        // When token-privilege-will-expire occurs, fetch a new token from the server and call renewToken to renew the token.
        this.clientAgora.on("token-privilege-will-expire", async function() {
            console.log("reached token-privilege-will-expire");
            var agoraOptions = await am.fetchOptions(channelName, userName);
            await am.clientAgora.renewToken(agoraOptions.token);
        });
    }

    handleCryptError() {
        console.log("Decryption failed while subscribing to stream, incorrect settings");
    }
}