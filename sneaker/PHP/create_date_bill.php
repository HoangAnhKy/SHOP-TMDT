<?php
//insert.php
$connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
$data = json_decode(file_get_contents("php://input"));
$Trading_code = $data->Trading_code;
$query = "INSERT INTO `bill`(`date`, `Trading_code`) VALUES (now(), $Trading_code)";
$statement = $connect->prepare($query);
if($statement->execute()){
    echo "thành công!!!";
}else{
    echo "Lỗi!!!";
}
?>