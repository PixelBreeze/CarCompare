$(window).ready(function(e) {
    $.ajax({
        url: "php/retrieveCompared.php",
        type: "post",
        dataType: "json",
        success: function(comparelist) {
            var i = 0;
            var divStart = '<div class="col-12 col-md-6 col-lg-12"><figure class="figure product-box row"><div class="col-12 col-md-12 col-lg-5 col-xl-4 p0"><div class="product-box-img">';

            list.forEach(function(obj, index) {

                var divImage = '<img src="/img/product-img/product-img-' + obj.id + '.png" class="figure-img img-fluid" alt="Product Img"></div>';

                /*if (i > 9) {
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
		    i++;*/

            });
        }
    });
});
