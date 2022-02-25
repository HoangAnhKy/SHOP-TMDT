<?php
include("conn.php");
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