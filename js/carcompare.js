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

function delCookie(i){
  document.cookie = "carInfo" + i + "=0;expires=Thu, 1 Jan 2020 20:24:25 GMT;path=/";
  var carCount = getCookie('carCount');
  carCount--;
  setCookie('carCount',carCount,7);
  updateData();
}

document.addEventListener('DOMContentLoaded', function() {
  updateData();
}, false);

function updateData(){  
    const compareBox = document.getElementsByClassName("wd-item-list")[0];
	  while (compareBox.lastChild) {
		  compareBox.removeChild(compareBox.lastChild);
	  }
    var carCount = getCookie('carCount');
    var car1 = getCookie('carInfo1');
    var car2 = getCookie('carInfo2');
    var car3 = getCookie('carInfo3');
    console.log('car count is',carCount);
    document.getElementsByClassName("fa-balance-scale")[0].parentElement.nextSibling.nextSibling.innerHTML = carCount;//set number for icon
    //console.log(test);
    if(car1 != 0) {
      addCarToList(car1);
    }
    if(car2 != 0) {
      addCarToList(car2);
    }
    if(car3 != 0) {
      addCarToList(car3);
    }
}

function addCarToList(carInfo){
  setCookie('carCount',carCount,7);
  var arr=carInfo.split(":"); //id0,title1,price2,imageurl3
  var divStart = '<div class="media">';
  var divImage = '<img class="d-flex mr-3 cart-img" src="'+ arr[3] +'" alt="cart-img">';
  var divBody = '<div class="media-body"><h6 class="mt-0 list-group-title">'+ arr[1] +'</h6><div class="rating"><a href="#"><i class="fa fa-star active-color" aria-hidden="true"></i></a><a href="#"><i class="fa fa-star active-color" aria-hidden="true"></i></a><a href="#"><i class="fa fa-star active-color" aria-hidden="true"></i></a><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></div><div class="cart-price">'+ arr[2] +'</div><div class="deleteCompare" onclick="delCookie('+ carCount +')">Delete</div></div></div>';
  
  var div = divStart + divImage + divBody;
  //console.log(div);
  $(".wd-item-list").append(div);
}

function compareCar(event){
  var domElement = event.target;//$(event.target);
  var carid = domElement.id;
  var carTitle = domElement.parentElement.parentElement.previousSibling.childNodes[0].childNodes[1].innerHTML;
  var carPrice = domElement.parentElement.parentElement.previousSibling.previousSibling.previousSibling.childNodes[0].childNodes[0].childNodes[0].innerHTML;
  var carImage = "url/"+carid;
  var carCount = getCookie('carCount');
  var carInfo = carid+":"+carTitle+":"+carPrice+":"+carImage;
  if(carCount < 3) {
    if(carCount == 0) {
      setCookie('carInfo1',carInfo,7);
      addCarToList(carInfo);
    } else if(carCount == 1) {
      setCookie('carInfo2',carInfo,7);
      addCarToList(carInfo);
    } else if(carCount == 2) {
      setCookie('carInfo3',carInfo,7);
      addCarToList(carInfo);
    }
	  var carCount = getCookie('carCount');
  carCount++;
    console.log(carCount);
    document.getElementsByClassName("fa-balance-scale")[0].parentElement.nextSibling.nextSibling.innerHTML = carCount;
  } else {
    alert("Reached maximum of cars to compare!");
  }

}
