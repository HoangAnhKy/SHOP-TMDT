<?php
     
    if(isset($_POST['name']) && isset($_POST['email'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $body = $_POST['body'];
    }
    include("conn.php");
    $query = "INSERT INTO accound (name, email, pass, Role) VALUES('$name', '$email', '$body', 'user');";
    $statement = $connect->prepare($query);
    try{
        if($statement->execute()){
            echo json_encode("Tạo tài khoản thành công!!! mật khẩu đã được gửi vào mail của bạn");
        }else{  
            echo json_encode("Tạo tài khoản không thành công!!!");
        }
    }catch(Exception $e){
        echo json_encode("Tạo tài khoản không thành công!!! tên hoặc email đã được sử dụng");
    }

?>