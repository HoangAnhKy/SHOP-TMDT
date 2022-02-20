<?php

    $connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
    $name_accound = $_GET["name_accound"];    
    $query = "SELECT * FROM `favorite` WHERE name_accound = '$name_accound';";

    $statement = $connect->prepare($query);

    if($statement->execute()){
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        $array["favorite"] =  $data;
        echo json_encode($array);
    }

?>