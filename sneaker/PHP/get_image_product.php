<?php

    $connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
    $query = "SELECT * FROM image_web";

    $statement = $connect->prepare($query);

    if($statement->execute()){
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        $array["image"] =  $data;
        echo json_encode($array);
    }

?>