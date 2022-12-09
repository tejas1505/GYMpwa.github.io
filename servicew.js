
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function(reg){
            console.log("service worker registered");
        }).catch(function(err) {
            console.log("error: ", err)
        });
}

function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }
