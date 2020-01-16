$(window).ready(function(e) {
    $.ajax({
        url: "php/retrieveCompared.php",
        type: "post",
        dataType: "json",
        success: function(comparelist) {
            var i = 0;
            var divStart = '<div class="col-12 col-md-6 col-lg-12"><figure class="figure product-box row"><div class="col-12 col-md-12 col-lg-5 col-xl-4 p0"><div class="product-box-img">';

            list.forEach(function(obj, index) {
		    
                var divImage = '<td class="compare-details-section"><img src="/img/product-img/product-img-' + obj.id + '.png" class="figure-img img-fluid" alt="compare">';
		var divStatic = '<div class="product-detail-ph"> <button type="button" class="btn btn-info product-detail-collapse" data-toggle="collapse" data-target="#product-detail-1">Product Details <i class="fa fa-bars float-right" aria-hidden="true"></i></button> <div id="product-detail-1" class="collapse"> <div class="compare-price text-center"> <h6 class="compare-details-title">BMW X5</h6> <ul class="full-specifiction"> <li class="row"> <div class="col-12"> <p>Brand Name : Asus</p> </div> </li> <li class="row"> <div class="col-12"> <p>Release Date : 2019</p> </div> </li> <li class="row"> <div class="col-12"> <p>Release Date : 2018</p> </div> </li> <li class="row"> <div class="col-12"> <p>Google Play: Yes</p> </div> </li> <li class="row"> <div class="col-12"> <p>Unlock Phones: Yes</p> </div> </li> <li class="row"> <div class="col-12"> <p>Talk Time: 4-6h</p> </div> </li> <li class="row"> <div class="col-12"> <p>Battery Type: Not Detachable</p> </div> </li> <li class="row"> <div class="col-12"> <p>Size: 154.6x75.2x8.35mm</p> </div> </li> <li class="row"> <div class="col-12"> <p>Display Resolution: 1920x1080</p> </div> </li> <li class="row"> <div class="col-12"> <p>Feature: Gravity Response,MP3 Playback,Touchscreen,GPS</p> </div> </li> <li class="row"> <div class="col-12"> <p>Battery Capacity(mAh): 4000mAh</p> </div> </li> <li class="row"> <div class="col-12"> <p>Feature: Gravity Response,MP3 Playback,Touchscreen,GPS</p> </div> </li> <li class="row"> <div class="col-12"> <p>CPU Manufacturer: Qualcomm</p> </div> </li> <li class="row"> <div class="col-6"> <p>Feature: Gravity Response,MP3 Playback,Touchscreen,GPS</p> </div> </li> <li class="row"> <div class="col-12"> <p>CPU: Octa Core</p> </div> </li> <li class="row"> <div class="col-6"> <p>ROM: 16G</p> </div> </li> <li class="row"> <div class="col-6"> <p>SlotsDesign: Bar</p> </div> </li> </ul> <div class="compare-details-price"> <a href="#" target="_blank" class="btn btn-primary btn-sm compare-details-btn"> <p>15001$</p> </a> </div> </div> </div> </div>';
		var divTitle = '<div class="compare-price text-center product-detail-desktop"><h6 class="compare-details-title">' + obj.brand + obj.model '</h6><ul class="full-specifiction"></ul>';
		var divPrice = '<div class="compare-details-price"><a href="/shop.html" target="_blank" class="btn btn-primary btn-sm compare-details-btn"><div class="d-flex justify-content-between"><p class="pull-left">Buy now</p><p class="pull-right">' + obj.price + '€</p></div></a></div>';  
		var divClose = '</div></td>';
		    
		    var div = 
		    divImage +
                    divStatic +
                    divTitle +
                    divPrice +
                    divClose;

                $("#carColumnHeader").append(div);

            });
        }
    });
});
