<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

if(isset($_POST['name']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    //$body = rand(1000,9999);
    $body = $_POST['body'];

    $mail = new PHPMailer(true);
    try {
    //smtp settings                    //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = "miecute0509@gmail.com";                //SMTP username
    $mail->Password   = 'aA@123456';                            //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;

    //email settings
    $mail->isHTML(true);
    $mail->setFrom('miecute0509@gmail.com', $name);
    $mail->addAddress("miecute0509@gmail.com"); 
    $mail->Subject = ("$email");
    $mail->Body = ("$body");

    $mail->send();
        echo json_encode('Email đã được gửi đi thành công!');
    } catch (Exception $e) {
        echo json_encode("Email gửi đi không thành công. Error: {$mail->ErrorInfo}");
    }
}

?>
      