$(function() {
  $("#sensor").on("click", function() {
    Fingerprint.isAvailable(isAvailableSuccess, isAvailableError);

    function isAvailableSuccess(result) {
      /*
      result depends on device and os.
      iPhone X will return 'face' other Android or iOS devices will return 'finger'
      */
      Fingerprint.show({
        clientId: "Fingerprint-Demo",
        clientSecret: "password" //Only necessary for Android
      }, successCallback, errorCallback);

      function successCallback(){
        app.loadVeiw("home");
      }

      function errorCallback(err){
        alert("Authentication invalid " + err);
      }
    }

    function isAvailableError(message) {
      alert(message);
    }
  });
});
