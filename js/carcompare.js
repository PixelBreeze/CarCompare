function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "0";
}

document.addEventListener('DOMContentLoaded', function() {
    var carCount = getCookie('carCount');
    console.log('car count is',carCount);
}, false);

function compareCar(event){
  var domElement = event.target;//$(event.target);
  var carid = domElement.id;
  var carTitle = domElement.parentElement.parentElement.previousSibling.childNodes[0].childNodes[1].innerHTML;
  var carPrice = domElement.parentElement.parentElement.firstSibling.childNodes[0].childNodes[0].childNodes[0].innerHTML;
  var carCount = 0//getCookie('carCount');
  if(carCount < 3) {
    carCount++;
    setCookie('carCount',carCount,7);
    
  } else {
    alert("Reached maximum of cars to compare!");
  }
  console.log(carCount);
  console.log(carPrice);
  
  //setCookie('carCount',i,7);
}
