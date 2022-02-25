<?php
//insert.php

include("conn.php");
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