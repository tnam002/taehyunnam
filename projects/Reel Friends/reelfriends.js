// // ***** REQUESTING ACCESS TO USER'S CAMERA / MICROPHONE *****

// // constraints for which media device we are looking for
// const constraints = { 'video': true, 'audio': true }

// // request access to user's media devices
// navigator.mediaDevices.getUserMedia(constraints)
//     .then(stream => { console.log('Got MediaStream:', stream); })
//     .catch(error => { console.error('Error accessing media devices.', error); });

// ***** GETTING MEDIA DEVICE INFORMATION FOR THE USER *****

// /* define a function that takes in a device type, gets all media devices, filters, and uses the callback function 
// on each MediaDeviceInfo object */
// function getConnectedDevices(type, callback) {
//     navigator.mediaDevices.enumerateDevices()
//         .then( devices => { const filtered = devices.filter(device => device.kind === type); callback(filtered); } );
// }

// // gets and prints info on every type of media device type: cameras, microphones, and speakers
// getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras));
// getConnectedDevices('audioinput', microphones => console.log('Microphones found', microphones));
// getConnectedDevices('audiooutput', speakers => console.log('Speakers found', speakers));


