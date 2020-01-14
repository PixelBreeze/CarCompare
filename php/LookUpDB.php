<?php

$connection=mysqli_connect("localhost","webuser","webuserpass1","cars");
if (mysqli_connect_errno()){
  echo "Failed to connect to DB: " . mysqli_connect_error();
}

$sql="SELECT id,brand,model,engine_type,engine_capacity,year,price,color,gear_box,descr,img_url FROM cars";
$result=mysqli_query($connection,$sql);

$list = array();
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $list[] = array (
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


echo json_encode($list);
