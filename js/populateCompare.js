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

function highlightBest(sectionId){
	var prevValueMax = 0;
	var prevValueMin = 999999;
	var bestValue =0;
	var div = document.getElementById(sectionId).children;
	if(!sectionId == "carPrice") {
		$(div).each(function( i ) {
  			if(this.innerHTML > prevValueMax) {
				bestValue=this;
				//console.log(this);
			}
		});
	} else {
		$(div).each(function( i ) {
  			if(this.innerHTML < prevValueMin) {
				bestValue=this;
				//console.log(this);
			}
		});
	}
	$(bestValue).css({"font-weight":"Bold"});
	$(bestValue).append('<i class="fa fa-star active-color" aria-hidden="true"></i>');
}

$(window).ready(function(e) {
    $.ajax({
        url: "php/retrieveCompared.php",
        type: "post",
        dataType: "json",
        success: function(comparelist) {
            var i = 0;
            var divStart = '<td class="compare-details-section"><div class="col-12 col-md-6 col-lg-12"><figure class="figure product-box row"><div class="col-12 col-md-12 col-lg-5 col-xl-4 p0"><div class="product-box-img">';

            comparelist.forEach(function(obj, index) {
		    
		//header    
                var divImage = '<td class="compare-details-section"><img src="/img/product-img/product-img-' + obj.id + '.png" class="figure-img img-fluid" style="height: 150px;display: block;margin: auto !important;padding-bottom: 15px;" alt="compare">';
		var divStatic = '<div class="product-detail-ph"> <button type="button" class="btn btn-info product-detail-collapse" data-toggle="collapse" data-target="#product-detail-1">Product Details <i class="fa fa-bars float-right" aria-hidden="true"></i></button> <div id="product-detail-1" class="collapse"> <div class="compare-price text-center"> <h6 class="compare-details-title">'+ obj.brand + obj.model +'</h6> <ul class="full-specifiction"> <li class="row"> <div class="col-12"> <p>Brand Name : '+ obj.brand +'</p> </div> </li> <li class="row"> <div class="col-12"> <p>Release Date : '+ obj.year +'</p> </div> </li> <li class="row"> <div class="col-12"> <p>Release Date : 2018</p> </div> </li> <li class="row"> <div class="col-12"> <p>Talk Time: 4-6h</p> </div> </li> <li class="row"> <div class="col-12"> <p>Display Resolution: 1920x1080</p> </div> </li> <li class="row"> <div class="col-12"> <p>Feature: Gravity Response,MP3 Playback,Touchscreen,GPS</p> </div> </li> <li class="row"> <div class="col-12"> <p>Battery Capacity(mAh): 4000mAh</p> </div> </li> <li class="row"> <div class="col-12"> <p>Feature: Gravity Response,MP3 Playback,Touchscreen,GPS</p> </div> </li> <li class="row"> <div class="col-12"> <p>CPU Manufacturer: Qualcomm</p> </div> </li> <li class="row"> <div class="col-6"> <p>Feature: Gravity Response,MP3 Playback,Touchscreen,GPS</p> </div> </li> <li class="row"> <div class="col-12"> <p>CPU: Octa Core</p> </div> </li> <li class="row"> <div class="col-6"> <p>ROM: 16G</p> </div> </li> <li class="row"> <div class="col-6"> <p>SlotsDesign: Bar</p> </div> </li> </ul> <div class="compare-details-price"> <a href="#" target="_blank" class="btn btn-primary btn-sm compare-details-btn"> <p>15001$</p> </a> </div> </div> </div> </div>';
		var divTitle = '<div class="compare-price text-center product-detail-desktop"><h6 class="compare-details-title">' + obj.brand + obj.model + '</h6><ul class="full-specifiction"></ul>';
		var divPrice = '<div class="compare-details-price"><a href="/shop.html" target="_blank" class="btn btn-primary btn-sm compare-details-btn"><div class="d-flex justify-content-between"><p class="pull-left">Buy now</p><p class="pull-right">' + obj.price + '€</p></div></a></div>';  
		var divClose = '</div></td>';
		
		//general
		var divYear='<td>'+ obj.year +'</td>';
		var divColor='<td>'+ obj.color +'</td>';
		//engine
		var divEnginet='<td>'+ obj.engine_type +'</td>';
		var divEnginec='<td>'+ obj.engine_capacity +'.0</td>';
		//gearshift
		var divGearb='<td>'+ obj.gear_box +'</td>';
		var divGearc='<td>6</td>';
		var divPrice1='<td>'+ obj.price +'</td>';
		    
		//append header
		var div = divImage + divStatic + divTitle + divPrice + divClose;
		$("#carColumnHeader").append(div);
		    
		//append content
		$("#carRelease").append(divYear);
		$("#carColor").append(divColor);
		$("#carEnginet").append(divEnginet);
		$("#carEnginec").append(divEnginec);
		$("#carGearb").append(divGearb);
		$("#carGearc").append(divGearc);
		$("#carPrice").append(divPrice1);
		    
		var carCount = getCookie('carCount');
		if(i==0){
			$("#productsAdded").append("<u>" + carCount + " cars added</u>");
		    }	
		i++;
		$('#ui-id-4').css({"display":"block","height":"100px"});
            });
        }
    });
});
$(window).ready(function(e){
	setTimeout(function() {
		highlightBest("carRelease");
		highlightBest("carPrice");
		highlightBest("carEnginec");
	}, 100);
});



