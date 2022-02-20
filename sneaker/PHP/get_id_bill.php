<?php

    $connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
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