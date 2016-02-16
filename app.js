//
//
//
function  onDeviceReady() {
    // console.log('onDeviceReady');
    document.getElementById('isstate').innerHTML = 'onDeviceReady';
};

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
