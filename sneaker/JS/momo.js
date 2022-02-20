
var m = 00; // Phút
var s = 60;
var btn = false;

function pay_momo() {
    sessionStorage.removeItem('ok');
    document.getElementById("momo").style.display = "block";

    document.getElementById('body').style.opacity = '0.5';
    document.getElementById('footer_all').style.opacity = '0.5';
    document.getElementById("navbar").style.opacity = '0.5';
    s = 60;
    btn = false;
    run_count(s, btn);
}

function run_count(s, btn) {
    if (s < 10) {
        document.getElementById("btn_pay").innerHTML = `00:0${s}`;
    } else {
        document.getElementById("btn_pay").innerHTML = `00:${s}`;
    }

    if (s == 0) {
        clearInterval(timeout);
        document.getElementById("momo").style.display = "none";
        document.getElementById('body').style.opacity = '1';
        document.getElementById('footer_all').style.opacity = '1';
        document.getElementById("navbar").style.opacity = '1';
        document.getElementById("btn_pay").innerHTML = "Giao dịch thất bại";
        alert("Giao dịch thất bại");
        return;
    }
    if (btn == true) {
        clearInterval(timeout);
        document.getElementById("momo").style.display = "none";
        document.getElementById('body').style.opacity = '1';
        document.getElementById('footer_all').style.opacity = '1';
        document.getElementById("navbar").style.opacity = '1';
        alert("Đã xác nhận, Giao dịch đang được xử lý");
        return;
    }
    timeout = setTimeout(function () {
        s--;
        run_count(s, btn);
    }, 1000);
}

function thanhtoan() {

    var MGD = $("#MGD_momo");
    if (isNotEmpty(MGD)) {
        btn = true;
        sessionStorage.setItem("ok", "ok");
        pay();
        run_count(s, btn);
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