<?php
//insert.php
$connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
$code_bill = $_GET["code_bill"];
$status = $_GET["status"];
$query = "UPDATE `status_cart` SET `status` = '$status' WHERE `code_Bill` = '$code_bill';";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo ("Update thành công!!!");
}else{
    echo ("Lỗi không thể update!!!");
}
?>