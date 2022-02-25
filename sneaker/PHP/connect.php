<?php
    include("conn.php");
    
// $connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
    $query = "SELECT * FROM product";

    $statement = $connect->prepare($query);

    if($statement->execute()){
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        $array["Product"] =  $data;
        echo json_encode($array);
    }

?>