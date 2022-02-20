<?php
//insert.php
$connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
$data = json_decode(file_get_contents("php://input"));
$name_accound = $data->name_accound;
$name = $data->name;

$query = "DELETE FROM favorite WHERE (name='$name' and name_accound='$name_accound');";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo "Hủy yêu thích sản phẩm thành công!!!";
}else{
    echo "Lỗi không thể hủy yêu thích sản phẩm!!!";
}

?>