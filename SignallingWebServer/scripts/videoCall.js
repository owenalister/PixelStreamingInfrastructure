async function startVideo(channelName, userName) {

  // add event listener to play remote tracks when remote user publishes.
  am.clientAgora.on("user-published", handleUserPublished);
  am.clientAgora.on("user-unpublished", handleUserUnpublished);

  // join a channel and create local tracks, we can use Promise.all to run them concurrently
  [userName, am.localAgoraTracks.audioTrack, am.localAgoraTracks.videoTrack] = await am.callControls.joinChannel(channelName, userName);
  am.init();
  
  // Play the local video track to the local browser and update the UI with the user ID.
  am.localAgoraTracks.videoTrack.play("local-player");
  $("#local-player-name").text(`localVideo(${current_user.Sub})`); 

  // Publish the local video and audio tracks to the channel.
  await am.clientAgora.publish(Object.values(am.localAgoraTracks));
}

/*
 * Stop all local and remote tracks then leave the channel.
 */
async function leaveVideo() {
  am.callControls.closeTracks();

  // Remove player views.
  $("#remote-playerlist").html("");

  // leave the channel
  await am.callControls.leaveChannel();

  $("#local-player-name").text("");
  //$("#join").attr("disabled", false);
  //$("#leave").attr("disabled", true);
  console.log("client leaves channel success");
}

async function stopVideo() {
  am.callControls.stopTracks();

  // Remove player views.
  $("#remote-playerlist").html("");
  
  //local
  $("#local-player-name").text("");
  //$("#join").attr("disabled", false);
  //$("#leave").attr("disabled", true);
  console.log("client leaves channel success");
}


/*
 * Add the local use to a remote channel.
 *
 * @param  {IAgoraRTCRemoteUser} user - The {@link  https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/iagorartcremoteuser.html| remote user} to add.
 * @param {trackMediaType - The {@link https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/itrack.html#trackmediatype | media type} to add.
 */
async function subscribe(user, mediaType) {
  const uid = user.uid;
  // subscribe to a remote user
  await am.clientAgora.subscribe(user, mediaType);
  console.log("subscribe success");
  if (mediaType === 'video') {
    const player = $(`
      <div id="player-wrapper-${uid}">
        <p class="player-name">remoteUser(${uid})</p>
        <div id="player-${uid}" class="player"></div>
      </div>
    `);
    $("#remote-playerlist").append(player);
    user.videoTrack.play(`player-${uid}`);
  }
  if (mediaType === 'audio') {
    user.audioTrack.play();
  }
}

/*
 * Add a user who has subscribed to the live channel to the local interface.
 *
 * @param  {IAgoraRTCRemoteUser} user - The {@link  https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/iagorartcremoteuser.html| remote user} to add.
 * @param {trackMediaType - The {@link https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/itrack.html#trackmediatype | media type} to add.
 */
 function handleUserPublished(user, mediaType) {
    subscribe(user, mediaType);
}

//  * Remove the user specified from the channel in the local interface.
//  *
//  * @param  {string} user - The {@link  https://docs.agora.io/en/Voice/API%20Reference/web_ng/interfaces/iagorartcremoteuser.html| remote user} to remove.
function handleUserUnpublished(user) {
        const id = user.uid;
        $(`#player-wrapper-${id}`).remove();
}
