<?php
$c_carCount = "carCount";
$c_car1 = "carInfo1";
$c_car2 = "carInfo2";
$c_car3 = "carInfo3";

if(!isset($_COOKIE[$c_car1])) {
    echo "Cookie named '" . $c_car1 . "' is not set!";
} else {
    echo "Cookie '" . $c_car1 . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$c_car1];
}
?>
