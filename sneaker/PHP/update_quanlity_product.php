<?php
//insert.php
    include("conn.php");
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$quantity = $data->quantity;
$sales = $data->sales;

$query = "UPDATE product SET quantily  = '$quantity', sales = '$sales' WHERE name = '$name'";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo ("Update thành công!!!");
}else{
    echo ("Lỗi không thể update!!!");
}
?>