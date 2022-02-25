<?php

include("conn.php");
    $code_bill = $_GET["code_bill"];
    $query = "SELECT * FROM `status_cart` WHERE code_bill='$code_bill';";

    $statement = $connect->prepare($query);

    if($statement->execute()){
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        $array["bill"] =  $data;
        echo json_encode($array);
    }

?>