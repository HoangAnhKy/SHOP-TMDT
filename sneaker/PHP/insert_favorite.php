<?php
//insert.php
    include("conn.php");
$data = json_decode(file_get_contents("php://input"));

$name_accound = $data->name_accound;
$name = $data->name;
$sale = $data->sale;
$image = $data->image;
$price = $data->price;
$quantily = 1;
$favorites = 1;
$product_new = $data->product_new;
$id = $data->id;

$query = "INSERT INTO favorite (name_accound, name, sale, image, price, quantily, favorites, product_new, id) VALUES('$name_accound', '$name', '$sale', '$image', '$price', '$quantily','$favorites', '$product_new', '$id');";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo "Thêm vào yêu thích thành công!!!";
}else{
    echo "Lỗi không thể thêm vào yêu thích!!!";
}
?>