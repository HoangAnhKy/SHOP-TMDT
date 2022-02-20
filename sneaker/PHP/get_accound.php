<?php
     

    $connect = new PDO("mysql:host=localhost; dbname=product_tmdt","root",""); 
    
    $email = $_GET['email']; 
    $pass = $_GET['pass']; 
    $query = "SELECT * FROM `accound` WHERE email = '$email' and pass = '$pass';";
    $statement = $connect->prepare($query);
    if($statement->execute()){
        while($row = $statement->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
        $array["accound"] =  $data;
        echo json_encode($array);
    }else{
        echo "không tồn tại tài khoản này!";
    }

?>