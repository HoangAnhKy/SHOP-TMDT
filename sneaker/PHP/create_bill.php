<?php
//insert.php

include("conn.php");
$data = json_decode(file_get_contents("php://input"));

$code_bill = $data->code_bill;
$name_accound = $data->name_accound;
$name = $data->name;
$sale = $data->sale;
$image = $data->image;
$price = $data->price;
$quantity = $data->quantity;
$favorites = $data->favorites;
$product_new = $data->product_new;
$id = $data->id;
$status = $data->status;


$query = "INSERT INTO status_cart (code_bill ,name_accound, name, sale, image, price, quantity, favorites, product_new, id, status) VALUES('$code_bill','$name_accound', '$name', '$sale', '$image', '$price', '$quantity','$favorites', '$product_new', '$id', '$status');";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo "Thanh toán thành công!!!";
}else{
    echo "Lỗi không thể thanh toán !!!";
}
?>