<?php
//insert.php
    include("conn.php");
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$name_accound = $data->name_accound;
$query = "DELETE FROM my_cart WHERE (name='$name' and name_accound='$name_accound')";
$statement = $connect->prepare($query);

if($statement->execute()){
    echo "Hủy sản phẩm trong giỏ hàng thành công!!!";
}else{
    echo "Lỗi không thể hủy sản phẩm trong giỏ hàng !!!";
}

?>