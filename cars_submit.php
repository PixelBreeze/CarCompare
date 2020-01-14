<?php
//echo '<h3 style="text-align:center;">A very detailed error message ( ͡° ͜ʖ ͡°)</h3>';
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

$brand = mysqli_real_escpae_string($connection,$_REQUEST['brand']);

$query = "INSERT INTO cars (brand, model, engine_type, engine_capacity, year, price, color, gear_box, descr) VALUES( '$brand', '$model', '$engine_type', '$engine_capacity', '$year', '$price', '$color', '$gear_box', '$descr')";

if(mysqli_query($connection, $query)){
    echo "Car records added successfully.";
} else{
    echo "ERROR: Could not able to execute $query. " . mysqli_error($connection);
}
?>
