///register media devices for audio and video
// add it to settings
// 
// 

let allMediaDevices = 
{
  audioInput:[],
  audioOutput:[],
  videoInput:[],
  other:[]
};

const videoElement = document.querySelector('video#testVideo');
const audioInputSelect = document.querySelector('select#audioInput');
const audioOutputSelect = document.querySelector('select#audioOutput');
const videoInput = document.querySelector('select#videoInput');
const selectors = [audioInputSelect, audioOutputSelect, videoInput]; 

function onGotDevices(deviceInfos) {	

   // Handles being called several times to update labels. Preserve values.
  const values = selectors.map(select => select.value);
  selectors.forEach(select => {
    while (select.firstChild) {
      select.removeChild(select.firstChild);
    }
  });

	for (let i = 0; i !== deviceInfos.length; ++i) 
	{	
     	const deviceInfo = deviceInfos[i];

		if (deviceInfo.kind === 'audioinput') {
		    addMediaDeviceOption(audioInputSelect, deviceInfo);
	      allMediaDevices.audioInput.push(deviceInfo)
	    } else if (deviceInfo.kind === 'audiooutput') {
			addMediaDeviceOption(audioOutputSelect, deviceInfo);
	      	allMediaDevices.audioOutput.push(deviceInfo)
	    } else if (deviceInfo.kind === 'videoinput') {
	      	allMediaDevices.videoInput.push(deviceInfo)
			addMediaDeviceOption(videoInput, deviceInfo);
	    } else {
	      console.log('Some other kind of source/device: ', deviceInfo);
	    }
	}

}

navigator.mediaDevices.enumerateDevices().then(onGotDevices).catch(handleError);

function onGotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;// TODOvideo html object  
  return navigator.mediaDevices.enumerateDevices();
}

// Attach audio output device to video element using device/sink ID.
function attachSinkId(element, sinkId) {
  if (typeof element.sinkId !== 'undefined') {
    element.setSinkId(sinkId)
        .then(() => {
          console.log(`Success, audio output device attached: ${sinkId}`);
        })
        .catch(error => {
          let errorMessage = error;
          if (error.name === 'SecurityError') {
            errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
          }
          console.error(errorMessage);
          // Jump back to first output device in the list as it's the default.
          audioOutputSelect.selectedIndex = 0;
        });
  } else {
    console.warn('Browser does not support output device selection.');
  }
}

function changeAudioSource() {
  const audioSource = audioOutputSelect.value;
  attachSinkId(videoElement, audioSource); //TODO we have to have video
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

function addMediaDeviceOption(select,object){
    var option = document.createElement('option');
    option.value = object.deviceId;
    option.innerHTML = object.label;
    select.append(option);
}

function registerMediaDevices()
{
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop();
    });
  }
  const audioSource = audioInputSelect.value;
  const videoSource = videoInput.value;
  const constraints = {
    audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    //audio: true, video: true 
  }; 

  navigator.mediaDevices.getUserMedia(constraints).then(onGotStream).then(onGotDevices).catch(handleError);
}

audioInputSelect.onchange = registerMediaDevices;
audioOutputSelect.onchange = changeAudioSource;
videoInput.onchange = registerMediaDevices;
registerMediaDevices();
