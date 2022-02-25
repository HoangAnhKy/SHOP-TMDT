<?php

    include("conn.php");
    $name_accound = $_GET["name_accound"];    
    $query = "SELECT * FROM `status_cart` WHERE name_accound = '$name_accound';";

    $statement = $connect->prepare($query);

    if($statement->execute()){
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        $array["cart"] =  $data;
        echo json_encode($array);
    }

?>