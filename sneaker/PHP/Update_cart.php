<?php
//insert.php
    include("conn.php");
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$name_accound = $data->name_accound;
$quantity = $data->quantity;

$query = "UPDATE my_cart SET quantity = $quantity WHERE name = '$name' and name_accound='$name_accound'";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo "Update thành công!!!";
}else{
    echo "Lỗi không thể update!!!";
}
?>