<?php
//insert.php
$connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$favorites = $data->favorites;
$query = "UPDATE product SET favorites = $favorites WHERE name = '$name'";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo "Success";
}else{
    echo "Error";
}

?>