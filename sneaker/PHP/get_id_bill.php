<?php

    
include("conn.php");
    $query = "SELECT * FROM `bill`";

    $statement = $connect->prepare($query);

    if($statement->execute()){
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        $array["bill"] =  $data;
        echo json_encode($array);
    }

?>