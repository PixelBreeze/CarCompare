<?php
 ini_set("display_errors", "1");
 error_reporting(E_ALL);

//echo '<h3 style="text-align:center;">A very detailed error message ( ͡° ͜ʖ ͡°)</h3>';
$host = "localhost";
$db_name = "cars";
$username = "webuser";
$password = "webuserpass1";
$connection = null;

try{
$connection = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}
    $query = "INSERT INTO cars (brand, model, engine_type, engine_capacity, year, price, color, gear_box, descr) VALUES( :brand, :model, :engine_type, :engine_capacity, :year, :price, :color, :gear_box, :descr)";
    $stmt = $connection->prepare($query);
    $stmt->bindParam(':brand',$_REQUEST['brand']);
    //$stmt->bindParam(':model',$_REQUEST['model']);
    //$stmt->bindParam(':engine_type',$_REQUEST['engine_type']);
    //$stmt->bindParam(':engine_capacity',$_REQUEST['engine_capacity'];
    //$stmt->bindParam(':year',$_REQUEST['year']);
    //$stmt->bindParam(':price',$_REQUEST['price']);
    //$stmt->bindParam(':color',$_REQUEST['color']);
    //$stmt->bindParam(':gear_box',$_REQUEST['gear_box']);
    //$stmt->bindParam(':descr',$_REQUEST['descr']);
    
    $stmt->execute();
    echo "Records inserted successfully.";
/*
} catch(PDOException $e){
  die("ERROR: Could not able to execute $query. " . $e->getMessage());
}
unset($connection);
                     
//$brand = mysqli_real_escpae_string($connection,$_REQUEST['brand']);

//query = "INSERT INTO cars (brand, model, engine_type, engine_capacity, year, price, color, gear_box, descr) VALUES( :brand, :model, :engine_type, :engine_capacity, :year, :price, :color, :gear_box, :descr)";

//if(mysqli_query($connection, $query)){
 //   echo "Car records added successfully.";
//} else{
//    echo "ERROR: Could not able to execute $query. " . mysqli_error($connection);
*/
?>
