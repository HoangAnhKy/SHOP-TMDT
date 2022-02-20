
var all_group = document.getElementsByClassName("group_btn");
var contents = document.getElementsByClassName('tab_hide');
var line = document.querySelectorAll("#spam_line");
console.log(all_group.length);
for (var i = 0; i < all_group.length; i++) {
    all_group[i].addEventListener("click", function () {
        for (var j = 0; j < all_group.length; j++) {
            all_group[j].querySelector("div").classList.remove("spam_line");
            all_group[j].querySelector(".btn_tab").getAttribute("value");
        }

        var a = this.querySelector("div");
        a.classList.add("spam_line");
        var name = this.querySelector(".btn_tab").getAttribute("value");
        showContent(name);
        var name_class_null = `${name}_null`;
        if (document.getElementById(name).clientHeight == '0') {
            document.getElementById(name_class_null).innerHTML = "Chưa có sản phẩm nào!";
            document.getElementById(name_class_null).style.position = "absolute";
            document.getElementById(name_class_null).style.transform = "translate(600px, 120px)";
            document.getElementById(name_class_null).style.fontSize = "25px";
        } else {
            document.getElementById(name_class_null).innerHTML = "";
        }

        if (document.getElementById(name).clientHeight >= '200') {
            document.getElementById("footer_all").style.paddingTop = "0px";
        } else {
            document.getElementById("footer_all").style.paddingTop = "350px";
        }
    });
}
showContent('tatca');
function showContent(id) {
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(id).style.transition = "0.5s";
    document.getElementById(id).style.display = "block";
}