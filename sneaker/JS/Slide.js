var KichThuoc = document.getElementById("banner").clientHeight;
var ChuyenSlide = document.getElementsByClassName("anh")[0];
var ChuyenSlide = document.getElementsByClassName("anh")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
Max -= KichThuoc;

var Chuyen = 0;

var count = 0, max = Img.length;

function run_img() {
    if (Chuyen < Max && count < max) {
        Chuyen += KichThuoc
        count++;
    } else if ((Chuyen < Max || Chuyen == Max) && count < max) {
        Chuyen -= KichThuoc
        count++;
    }
    else {
        Chuyen = 0;
        count = 0;
    }
    document.getElementsByClassName("anh")[0].style.marginTop = '-' + Chuyen + 'px';
}

run = setInterval("run_img()", 5000);

var obj = document.getElementById('banner');
obj.onmouseover = function () {
    clearInterval(run);
};
obj.onmouseout = function () {
    run = setInterval("run_img()", 5000);
};
