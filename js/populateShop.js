$(window).ready(function(e) {
    $.ajax({
        url: "php/LookUpDB.php",
        type: "post",
        dataType: "json",
        success: function(list) {
	    var i=0;
            var divStart = '<div class="col-12 col-md-6 col-lg-12"><figure class="figure product-box row"><div class="col-12 col-md-12 col-lg-5 col-xl-4 p0"><div class="product-box-img">';
            var divStartHidden = '<div class="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid"><figure class="figure product-box row"><div class="col-12 col-md-12 col-lg-5 col-xl-4 p0"><div class="product-box-img">';
            var divWishlist = '<div class="wishlist"><i class="fa fa-heart" aria-hidden="true"></i></div></div>';
            var divMiddle = '<div class="col-12 col-md-12 col-lg-7 col-xl-8 p0"><div class="figure-caption text-left"><div class="row"><div class="col-12 col-md-12 col-lg-6 col-xl-4 pr-0"><div class="price-start">';
            var divRating = '<div class="col-12 col-md-12 col-lg-6"><div class="rating"><a href="#"><i class="fa fa-star active-color" aria-hidden="true"></i></a><a href="#"><i class="fa fa-star active-color" aria-hidden="true"></i></a><a href="#"><i class="fa fa-star active-color" aria-hidden="true"></i></a><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></div></div>';
            var divClose = '</div></div></div></figure></div>';

            list.forEach(function(obj, index) {

                var divImage = '<img src="" class="figure-img img-fluid" alt="Product Img"></div>';
                var divQVbutton = '<div class="quick-view-btn"><div class="compare-btn"><button id="car.' + obj.id + '" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i class="fa fa-eye" aria-hidden="true"></i> Quick view</button></div></div>';
                var divPrice = '<strong class="active-color"><u>' + obj.price + '€</u></strong></div></div>';
                var divDesc = '<div class="col-12"><div class="content-excerpt"><h6 class="product-title">' + obj.brand + ' ' + obj.model + ' <br>' + obj.year + '</h6><p class="product-content">' + obj.descr + '</p></div></div>';
                var divCompButton = '<div class="col-12"><div class="compare-btn"><a id="car.' + obj.id + '" class="btn btn-primary btn-sm" onclick="compareCar()" href="#"><i class="fa fa-exchange" aria-hidden="true"></i> Add to compare</a></div></div>';
		
		if (i > 9) {
			divStart = divStartHidden;
		}
                var div =
                    divStart + 
		    divImage +
                    divQVbutton +
                    divWishlist +
                    divMiddle +
                    divPrice +
                    divRating +
                    divDesc +
                    divCompButton +
                    divClose;

                $("#viewContents").append(div);
		    i++;
            });
        }
    });
});

function ShowMore() {
  var x = document.getElementsByClassName("reviews-load-more-full_grid");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("reviews-load-more-full_grid");
  }
}
