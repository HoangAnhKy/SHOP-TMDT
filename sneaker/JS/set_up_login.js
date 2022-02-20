
function onClick_Login() { //phần này của nút login
    document.getElementById('body').style.opacity = '1';
    document.getElementById('footer_all').style.opacity = '1';
    document.getElementById('set').style.transform = 'translate(-221px, -1000px)';
    document.getElementById('set').style.position = 'fixed';
}
function Login_page() {
    document.getElementById('body').style.opacity = '0.5';
    document.getElementById('footer_all').style.opacity = '0.5';
    document.getElementById('set').style.top = '50%';
    document.getElementById('set').style.left = '50%';
    document.getElementById('set').style.transform = 'translate(-50%,-50%)';
    // document.getElementById('set').style.position = 'fixed';
}

function onClick_Register() {
    document.getElementById('front').style.transform = 'perspective(600px) rotateY(-180deg)';
    document.getElementById('back').style.transform = 'perspective(600px) rotateY(0deg)';
}
function onClick_ok() {
    document.getElementById('front').style.transform = 'perspective(600px) rotateY(0deg)';
    document.getElementById('back').style.transform = 'perspective(600px) rotateY(-180deg)';
}

function get_search() {
    document.getElementById('body').style.opacity = '0.5';
    document.getElementById('footer_all').style.opacity = '0.5';
    document.getElementById("background_search").style.top = '0px';
    document.getElementById('background_search').style.position = 'fixed';
}
function exit_search() {
    document.getElementById('body').style.opacity = '1';
    document.getElementById('footer_all').style.opacity = '1';
    document.getElementById("background_search").style.top = '-800px';
    document.getElementById('background_search').style.position = 'absolute';
}
function get_checkout() {
    document.getElementById('body').style.opacity = '0.5';
    document.getElementById('footer_all').style.opacity = '0.5';
    document.getElementById("navbar").style.opacity = '0';
    document.getElementById('check_kout').style.display = 'flex';
}
function exit_checkout() {
    document.getElementById('body').style.opacity = '1';
    document.getElementById('footer_all').style.opacity = '1';
    document.getElementById("navbar").style.opacity = '1';
    document.getElementById('check_kout').style.display = 'none';
}

// /* DOM  set up manager login*/
// var obj = document.getElementById('login_Account');
// obj.onmouseover = function () {
//     document.getElementById("my_account_container").style.display = 'flex';
// };
// obj.onmouseout = function () {
//     document.getElementById("my_account_container").style.display = 'none';
// };