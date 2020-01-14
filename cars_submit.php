<?php
$host = "localhost";
$db_name = "cars";
$username = "root";
$password = "no4pantsu0life";
$connection = null;
try{
$connection = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
$connection->exec("set names utf8");
}catch(PDOException $exception){
echo "Connection error: " . $exception->getMessage();
}

function saveData($brand, $model, $engine_type,$engine_capacity,$year,$price,$color,$gear_box,$descr){
global $connection;
$query = "INSERT INTO cars(brand, model, engine_type, engine_capacity, year, price, color, gear_box, descr) VALUES( :brand, :model, :engine_type, :engine_capacity, :year, :price, :color, :gear_box, :descr)";

$callToDb = $connection->prepare( $query );
$brand=htmlspecialchars(strip_tags($brand));
$model=htmlspecialchars(strip_tags($model));
$engine_type=htmlspecialchars(strip_tags($engine_type));
$engine_capacity=htmlspecialchars(strip_tags($engine_capacity));
$year=htmlspecialchars(strip_tags($year));
$price=htmlspecialchars(strip_tags($price));
$color=htmlspecialchars(strip_tags($color));
$gear_box=htmlspecialchars(strip_tags($gear_box));
$descr=htmlspecialchars(strip_tags($descr));
$callToDb->bindParam(":brand",$brand);
$callToDb->bindParam(":model",$model);
$callToDb->bindParam(":engine_type",$engine_type);
$callToDb->bindParam(":engine_capacity",$engine_capacity;
$callToDb->bindParam(":year",$year);
$callToDb->bindParam(":price",$price);
$callToDb->bindParam(":color",$color);
$callToDb->bindParam(":gear_box",$gear_box);
$callToDb->bindParam(":descr",$descr);
  
if($callToDb->execute()){
return '<h3 style="text-align:center;">Car has been added to db!</h3>';
}
}

if( isset($_POST['submit'])){
$brand = htmlentities($_POST['brand']);
$model = htmlentities($_POST['model']);
$engine_type = htmlentities($_POST['engine_type']);
$engine_capacity = htmlentities($_POST['engine_capacity']);
$year = htmlentities($_POST['year']);
$price = htmlentities($_POST['price']);
$color = htmlentities($_POST['color']);
$gear_box = htmlentities($_POST['gear_box']);
$descr = htmlentities($_POST['descr']);
  
//then you can use them in a PHP function. 
$result = saveData($brand, $model, $engine_type,$engine_capacity,$year,$price,$color,$gear_box,$descr);
echo $result;
}
else{
echo '<h3 style="text-align:center;">A very detailed error message ( ͡° ͜ʖ ͡°)</h3>';
}
?>
