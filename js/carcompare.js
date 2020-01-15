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
    var car1 = getCookie('carInfo1');
    var car2 = getCookie('carInfo2');
    var car3 = getCookie('carInfo3');
    console.log('car count is',carCount);
    var test = document.getElementsByClassName("fa-balance-scale").nextSibling //= carCount;//set number for icon
    console.log(test);
    if(car1 != null) {
      addCarToList(car1);
    }
    if(car2 != null) {
      addCarToList(car2);
    }
    if(car3 != null) {
      addCarToList(car3);
    }
}, false);

function addCarToList(carInfo){
  var arr=carInfo.split(":"); //id0,title1,price2,imageurl3
  
  
  //var div = divStart +
}

function compareCar(event){
  var domElement = event.target;//$(event.target);
  var carid = domElement.id;
  var carTitle = domElement.parentElement.parentElement.previousSibling.childNodes[0].childNodes[1].innerHTML;
  var carPrice = domElement.parentElement.parentElement.previousSibling.previousSibling.previousSibling.childNodes[0].childNodes[0].childNodes[0].innerHTML;
  var carImage = "url/"+carid;
  var carCount = 0//getCookie('carCount');
  var carInfo = carid+":"+carTitle+":"+carPrice+":"+carImage;
  if(carCount < 3) {
    if(carCount == 0) {
      setCookie('carInfo1',carInfo,7);
    } else if(carCount == 1) {
      setCookie('carInfo2',carInfo,7);
    } else if(carCount == 2) {
      setCookie('carInfo3',carInfo,7);
    }
  } else {
    alert("Reached maximum of cars to compare!");
  }
  carCount++;
  setCookie('carCount',carCount,7);
  console.log(carCount);
  //console.log(getCookie('carInfo1'));
  
  //setCookie('carCount',i,7);
}
