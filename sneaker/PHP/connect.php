<?php
// $connect = new PDO("mysql:host=sql105.epizy.com; dbname=epiz_30633101_w875","epiz_30633101","LTAnWyHd7rZv5"); host
$connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root","");
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