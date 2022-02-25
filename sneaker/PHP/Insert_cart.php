<?php
//insert.php
    include("conn.php");
$data = json_decode(file_get_contents("php://input"));

$name_accound = $data->name_accound;
$name = $data->name;
$sale = $data->sale;
$image = $data->image;
$price = $data->price;
$quantity = $data->quantity;
$maxquantity = $data->maxquantity;
$favorites = $data->favorites;
$product_new = $data->product_new;
$id = $data->id;

$query = "INSERT INTO my_cart (name_accound, name, sale, image, price, quantity, max_quantity, favorites, product_new, id) VALUES('$name_accound', '$name', '$sale', '$image', '$price', '$quantity', '$maxquantity','$favorites', '$product_new', '$id');";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo "Thêm vào giỏ hàng thành công!!!";
}else{
    echo "Lỗi không thể thêm vào giỏ hàng!!!";
}
?>