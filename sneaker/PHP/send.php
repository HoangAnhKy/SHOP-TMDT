<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

$data = json_decode(file_get_contents("php://input"));

$code_bill = $data->code_bill;
$name_accound = $data->name_accound;
$name = $data->name;
$price = $data->price;
$quantity = $data->quantity;
$status = $data->status;

    $mail = new PHPMailer(true);
    try {
        //smtp settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = "miecute0509@gmail.com";                //SMTP username
        $mail->Password   = 'aA@123456';                            //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;

        //email settings
        $mail->isHTML(true);
        $mail->setFrom('miecute0509@gmail.com', 'Sneaker');
        // $mail->addAddress("$email"); 
        $mail->addAddress("hoanganhkyltt@gmail.com"); 
        $mail->Subject = ("Hi $name_accound");
        $html ="&lt;p&gt; Thông tin hóa đơn &lt;/p&gt; &lt;/br&gt;&lt;/br&gt;&lt;table border='1'&gt; &lt;tr&gt; &lt;td&gt;Mã đơn hàng&lt;/td&gt; &lt;td&gt; {$code_bill}&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td&gt;Người đặt&lt;/td&gt; &lt;td&gt; {$name_accound}&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td&gt;Tên sản phẩm &lt;/td&gt; &lt;td&gt; {$name}&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;  &lt;td&gt;Giá&lt;/td&gt; &lt;td&gt; {$price}&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td&gt;Số lượng&lt;/td&gt; &lt;td&gt; {$quantity}&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt; &lt;td&gt;trạng thái đơn&lt;/td&gt; &lt;td&gt; {$status}&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;";

        $mail->Body  = Html_entity_decode($html);
        $mail->send();
            echo json_encode('Email đã được gửi đi thành công!');
    } catch (Exception $e) {
        echo json_encode("Email gửi đi không thành công. Error: {$mail->ErrorInfo}");
    };

?>
      