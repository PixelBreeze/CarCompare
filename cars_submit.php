<?php
echo '<h3 style="text-align:center;">A very detailed error message ( ͡° ͜ʖ ͡°)</h3>';
$host = "localhost";
$db_name = "cars";
$username = "webuser";
$password = "webuserpass1";
$connection = null;
try{
$connection = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
$connection->exec("set names utf8");
}catch(PDOException $exception){
echo "Connection error: " . $exception->getMessage();
}

function saveData($brand, $model, $engine_type, $engine_capacity, $year, $price, $color, $gear_box, $descr){
global $connection;
$query = "INSERT INTO cars(brand, model, engine_type, engine_capacity, year, price, color, gear_box, descr) VALUES( :brand, :model, :engine_type, :engine_capacity, :year, :price, :color, :gear_box, :descr);";
?>
