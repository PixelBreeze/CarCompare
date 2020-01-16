<?php
$c_carCount = "carCount";
$c_car1 = "carInfo1";
$c_car2 = "carInfo2";
$c_car3 = "carInfo3";
$s_car1 = $_COOKIE[$c_car1];
$s_car2 = $_COOKIE[$c_car2];
$s_car3 = $_COOKIE[$c_car3];

if(isset($_COOKIE[$c_car1])) {
$car1_arr = explode (":", $s_car1);  
    echo "Cookie '" . $car1_arr . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$c_car1];
}
if(isset($_COOKIE[$c_car2])) {
    echo "Cookie '" . $c_car1 . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$c_car1];
}
if(isset($_COOKIE[$c_car3])) {
    echo "Cookie '" . $c_car1 . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$c_car1];
}



$connection=mysqli_connect("localhost","webuser","webuserpass1","cars");
if (mysqli_connect_errno()){
  echo "Failed to connect to DB: " . mysqli_connect_error();
}

/*$sql="SELECT id,brand,model,engine_type,engine_capacity,year,price,color,gear_box,descr,img_url FROM cars";
$result=mysqli_query($connection,$sql);

$comparelist = array();
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $comparelist[] = array (
        'id' => $row['id'],
        'brand' => $row['brand'],
        'model' => $row['model'],
        'engine_type' => $row['engine_type'],
        'engine_capacity' => $row['engine_capacity'],
        'year' => $row['year'],
        'price' => $row['price'],
        'color' => $row['color'],
        'gear_box' => $row['gear_box'],
        'descr' => $row['descr'],
        'img_url' => $row['img_url']
    );
}

mysqli_free_result($result);
mysqli_close($connection);


echo json_encode($comparelist);
*/



?>
