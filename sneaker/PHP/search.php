<?php

    $connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");  
    $name = $_GET['name']; 
    $query = "SELECT * FROM `product` WHERE `name` like '%".$name."%'";
    
    $statement = $connect->prepare($query);

    if($statement->execute()){
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        $array["search"] =  $data;
       
    }
    echo json_encode($array);
?>