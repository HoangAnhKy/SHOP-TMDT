function sendEmail() {
    var name = $("#name");
    var email = $("#email");
    var pass = (((Math.random(1000, 9999)).toFixed(4)) * 10000);
    if (isNotEmpty(name) && isNotEmpty(email)) {
        $.ajax({
            url: './PHP/insert_accound.php',
            method: 'POST',
            dataType: 'json',
            data: {
                name: name.val(),
                email: email.val(),
                body: pass
            }, success: function (response) {
                alert(response);
                if (response === "Tạo tài khoản thành công!!! mật khẩu đã được gửi vào mail của bạn") {
                    $.ajax({
                        url: './PHP/sendEmail.php',
                        method: 'POST',
                        dataType: 'json',
                        data: {
                            name: name.val(),
                            email: email.val(),
                            body: pass
                        }, success: function (response) {
                            console.log(response);
                        }
                    });
                }
            }
        });
    }
}

function sendEmail_post() {
    var name = $("#name_fb");
    var email = $("#email_fb");
    var body = $("#content");
    if (isNotEmpty(name) && isNotEmpty(email)) {
        $.ajax({
            url: './PHP/feedBack.php',
            method: 'POST',
            dataType: 'json',
            data: {
                name: name.val(),
                email: email.val(),
                body: body.val(),
            }, success: function (response) {
                alert(response);
            }
        });
    }
}

function isNotEmpty(caller) {
    if (caller.val() == "") {
        caller.css('border', '2px solid red');
        return false;
    } else {
        caller.css('border', '');
    }

    return true;
}