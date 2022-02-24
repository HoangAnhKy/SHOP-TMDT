var myApp = angular.module('myApp', []);
var array = [];
var dateime = [];

var jump_sr = 5;
var star_sr = 0;
var end_sr = jump_sr;

var jump = 5;
var star = 0;
var end = jump;
var accound_login;
var product_search_get_quantity = [];
myApp.controller('myController', function ($scope, $http) {
    $scope.text = 1;
    $scope.text_sr = 1;
    $scope.sum = 0;
    $scope.len_cart = 0;
    //lấy toàn bộ sản phẩm
    $http.get(`./PHP/Get_cart.php?name_accound=${sessionStorage.getItem("my_account_user")}`).then(function (res) {
        $scope.sum = 0;
        array = res.data.cart;
        document.getElementById("list_null").innerHTML = "Chưa có sản phẩm nào trong giỏ hàng!";
        try {
            if (array.length != 0) {
                $scope.len_cart = array.length;
            }

            if (end > array.length) {
                $scope.products = loop(star, array.length);
                nullify();
            } else {
                $scope.products = loop(star, end);
                nullify();
            }
        } catch {
            $scope.len_cart = 0;
        }
    }, function () {
        alert("Lỗi kết nối dữ liệu!!!");
    });

    // giỏ hàng

    $scope.get_all = function () {
        $http.get(`./PHP/Get_cart.php?name_accound=${sessionStorage.getItem("my_account_user")}`).then(function (res) {
            array = res.data.cart;
            document.getElementById("list_null").innerHTML = "Chưa có sản phẩm nào trong giỏ hàng!";
            try {
                if (array.length != 0) {
                    $scope.len_cart = array.length;
                }
                if (end > array.length) {
                    $scope.products = loop(star, array.length);
                    nullify();
                } else {
                    $scope.products = loop(star, end);
                    nullify();
                }
            } catch {
                $scope.len_cart = 0;
            }
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }
    $scope.remove = function (sp) {
        if (sessionStorage.getItem("my_account_user") != null) {
            $http({
                method: "post",
                url: `./PHP/remove_cart.php`,
                data: {

                    'name_accound': sessionStorage.getItem("my_account_user"),
                    'name': sp.name,
                    'sale': sp.sale,
                    'image': sp.image,
                    'price': sp.price,
                    'quantity': sp.quantity,
                    'favorites': sp.favorites,
                    'product_new': sp.product_new,
                    'id': sp.id
                }
            }).then(function (reponse) {
                alert(reponse.data);
                location.reload();
            })
        }
        else {
            alert("Bạn phải đăng nhập để thực hiện thao tác này!");
        }
    }
    $scope.quantity = function (sp, equai) {
        var count = sp.quantity;
        if (equai == '+' && sp.max_quantity >= (count + 1)) {
            count = parseInt(count) + 1;
        } else if (equai == '-' && (sp.max_quantity - (count - 1)) >= 0 && count > 1) {
            count = parseInt(count) - 1;
        }

        $http({
            method: "post",
            url: `./PHP/Update_cart.php`,
            data: {
                'name_accound': sessionStorage.getItem("my_account_user"),
                'name': sp.name,
                'sale': sp.sale,
                'image': sp.image,
                'price': sp.price,
                'quantity': count,
                'favorites': sp.favorites,
                'product_new': sp.product_new,
                'id': sp.id
            }
        }).then(function (reponse) {
            $scope.get_all();
        })
    }
    $scope.update_quantity = function (name, quantity, count) {
        $http({
            method: "post",
            url: `./PHP/update_quanlity_product.php`,
            data: {
                'name': name,
                'quantity': quantity,
                'sales': count
            }
        }).then(function (reponse) {
            console.log(reponse.data);
        })
    }
    // load yêu thích
    $scope.reload_favorite = function () {
        if (sessionStorage.getItem("my_account_user") != null) {
            $http.get(`./PHP/Get_favorite.php?name_accound=${sessionStorage.getItem("my_account_user")}`).then(function (res) {
                array_favorite = res.data.favorite;
                $scope.set_favorite();
            }, function () {
                alert("Lỗi kết nối dữ liệu!!!");
            });
        }
    }
    $scope.update = function (sp, favorites) {
        $http({
            method: "post",
            url: `./PHP/update_favorite_product.php`,
            data: {
                'name': sp.name,
                'favorites': favorites
            }
        }).then(function (reponse) {
            console.log(reponse.data);
        })
    }
    $scope.set_favorite = function () {
        for (var i = 0; i < array_favorite.length; i++) {
            $scope.update(array_favorite[i], 1);
            $scope.get_class_sr(array_favorite[i].favorite);
        }
        $scope.get_all();
    }
    /* lấy dữ liệu tất cả sp */
    $http.get('./PHP/connect.php').then(function (res) {
        array_product = res.data.Product;
        if (sessionStorage.getItem("my_account_user") != null) {
            $http.get(`./PHP/Get_favorite.php?name_accound=${sessionStorage.getItem("my_account_user")}`).then(function (res) {
                array_favorite = res.data.favorite;
                $scope.set_favorite();
            }, function () {
                alert("Lỗi kết nối dữ liệu!!!");
            });
        } else {
            for (var i = 0; i < array.length; i++) {
                $scope.update(array[i], 0);
            }
        }
    }, function () {
        alert("Lỗi kết nối dữ liệu!!!");
    });
    $scope.get_quality = function () {
        $http.get('./PHP/connect.php').then(function (res) {
            array_product = res.data.Product;
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }

    $scope.sum_vnd = function () {
        var count = 0;
        for (var i = 0; i < $scope.len_cart; ++i) {
            count += array[i].price * array[i].quantity;
        }
        $scope.sum = count;
    }
    // thanh toán
    $scope.create_bill = function (sp, status, count, code) {
        $http({
            method: "post",
            url: `./PHP/create_bill.php`,
            data: {
                'code_bill': code,
                'name_accound': sessionStorage.getItem("my_account_user"),
                'name': sp.name,
                'sale': sp.sale,
                'image': sp.image,
                'price': sp.price,
                'quantity': count,
                'favorites': sp.favorites,
                'product_new': sp.product_new,
                'id': sp.id,
                'status': status
            }
        }).then(function (reponse) {
            console.log(reponse.data);
        })
    }
    $scope.remove_bill = function (sp) {
        if (sessionStorage.getItem("my_account_user") != null) {
            $http({
                method: "post",
                url: `./PHP/remove_cart.php`,
                data: {

                    'name_accound': sessionStorage.getItem("my_account_user"),
                    'name': sp.name,
                    'sale': sp.sale,
                    'image': sp.image,
                    'price': sp.price,
                    'quantity': sp.quantity,
                    'favorites': sp.favorites,
                    'product_new': sp.product_new,
                    'id': sp.id
                }
            }).then(function (reponse) {
                console.log(reponse.data);
                location.reload();
            })
        }
        else {
            alert("Bạn phải đăng nhập để thực hiện thao tác này!");
        }
    }
    $scope.create_date_bill = function (mgd) {
        $http({
            method: "post",
            url: `./PHP/create_date_bill.php`,
            data: {
                'Trading_code': mgd
            }
        }).then(function (reponse) {
            console.log(reponse.data);
        })
        $scope.get_date_bill();
    }
    $http({
        method: "get",
        url: `./PHP/get_id_bill.php`
    }).then(function (reponse) {
        dateime = reponse.data.bill;
    })


    $scope.get_date_bill = function () {
        $http({
            method: "get",
            url: `./PHP/get_id_bill.php`
        }).then(function (reponse) {
            dateime = reponse.data.bill;
            console.log(dateime);
        })
    }
    $scope.sendmail_pay = function (sp, status, count, code) {
        $http({
            method: "post",
            url: `./PHP/send.php`,
            data: {
                'code_bill': code,
                'name_accound': sessionStorage.getItem("my_account_user"),
                'name': sp.name,
                'price': sp.price,
                'quantity': count,
                'status': status
            }
        }).then(function (reponse) {
            console.log(reponse.data);
        })
    }
    $scope.pay = function () {
        if ($scope.momo == 'CÓ' && $scope.normal == 'CÓ') {
            alert('Bạn chỉ có thể chọn một trong hai phương thức trên');
            $scope.momo = 'KHÔNG';
            $scope.normal = 'kHÔNG';
        } else if ($scope.momo == 'CÓ') {
            pay_momo();
        } else if ($scope.normal == 'CÓ') {
            if (sessionStorage.getItem("my_account_user") != null) {
                $scope.get_quality();

                $scope.create_date_bill(0);
                $scope.get_date_bill();

                for (var i = 0; i < array.length; ++i) {
                    var arr = loop_img(array_product, array[i].name);
                    var quantity = arr[0].quantily;
                    var count = quantity - array[i].quantity;
                    var sales = arr[0].sales + array[i].quantity;
                    $scope.update_quantity(array[i].name, count, sales);
                    try {
                        $scope.create_bill(array[i], "chohang", array[i].quantity, dateime[dateime.length - 1].code_Bill);
                        $scope.sendmail_pay(array[i], "chohang", array[i].quantity, dateime[dateime.length - 1].code_Bill);
                    } catch (e) {
                        $scope.create_bill(array[i], "chohang", 0);
                        $scope.sendmail_pay(array[i], "chohang", 0);
                    }
                    $scope.remove_bill(array[i]);
                }
                alert("Yêu cầu đang được xử lý");
                $scope.get_all();
            }
            else {
                alert("Bạn phải đăng nhập để thực hiện thao tác này!");
            }
        } else {
            alert("vui lòng chọn hình thức thanh toán");
        }
    }
    $scope.pay2 = function () {
        $scope.get_quality();

        $scope.create_date_bill($scope.MGD);
        $scope.get_date_bill();

        if (sessionStorage.getItem("ok") != null) {
            if (sessionStorage.getItem("my_account_user") != null) {

                for (var i = 0; i < array.length; ++i) {
                    var arr = loop_img(array_product, array[i].name);
                    var quantity = arr[0].quantily;
                    var count = quantity - array[i].quantity;
                    var sales = arr[0].sales + array[i].quantity;
                    $scope.update_quantity(array[i].name, count, sales);
                    try {
                        $scope.create_bill(array[i], "choxacnhan", array[i].quantity, dateime[dateime.length - 1].code_Bill);
                        $scope.sendmail_pay(array[i], "choxacnhan", array[i].quantity, dateime[dateime.length - 1].code_Bill);
                    } catch (e) {
                        $scope.create_bill(array[i], "choxacnhan", 0);
                        $scope.sendmail_pay(array[i], "choxacnhan", 0);
                    }
                    $scope.remove_bill(array[i]);
                }
                alert("Yêu cầu đang được xử lý");
                $scope.get_all();
            }
            else {
                alert("Bạn phải đăng nhập để thực hiện thao tác này!");
            }
        }
    }


    //yêu thích trong tìm kiếm
    $scope.get_class_sr = function (a) {
        if (a == 1) {
            $scope.text_class = "fa-heart";
        } else if (a == 0) {
            $scope.text_class = "fa-heart-o";
        } else {
            $scope.text_class = "fa-heart-o";
        }
    }
    $scope.add_sr = function (sp, index) {
        $http({
            method: "post",
            url: index,
            data: {
                'name_accound': sessionStorage.getItem("my_account_user"),
                'name': sp.name,
                'sale': sp.sale,
                'image': sp.image,
                'price': sp.price,
                'quantily': sp.quantily,
                'favorites': sp.favorites,
                'product_new': sp.product_new,
                'id': sp.id
            }
        }).then(function (reponse) {
            alert(reponse.data);
        })
    }
    $scope.update_sr = function (sp, favorites) {
        $http({
            method: "post",
            url: `./PHP/update_favorite_product.php`,
            data: {
                'name_accound': sessionStorage.getItem("my_account_user"),
                'name': sp.name,
                'sale': sp.sale,
                'image': sp.image,
                'price': sp.price,
                'favorites': favorites,
                'product_new': sp.product_new,
                'id': sp.id
            }
        }).then(function (reponse) {
            console.log(reponse.data);
        })
    }
    $scope.remove_sr = function (sp, index) {
        $http({
            method: "post",
            url: index,
            data: {
                'name_accound': sessionStorage.getItem("my_account_user"),
                'name': sp.name
            }
        }).then(function (reponse) {
            alert(reponse.data);
        })
    }
    $scope.like_sr = function (sp) {
        if (sessionStorage.getItem("my_account_user") != null) {
            if (sp.favorites == 0) {
                $scope.update_sr(sp, 1);
                $scope.add_sr(sp, `./PHP/insert_favorite.php`);
            }
            else {
                $scope.update_sr(sp, 0);
                $scope.remove_sr(sp, `./PHP/delete_favorite.php`);
            }
            if ($scope.search_product != null) {
                $scope.re_search($scope.search_product);
            }
        }
        else {
            alert("Bạn phải đăng nhập để thực hiện thao tác này!");
        }
    }
    /* cart trong tìm kiếm */
    $scope.add_cart_sr = function (sp) {
        $http({
            method: "post",
            url: `./PHP/Insert_cart.php`,
            data: {
                'name_accound': sessionStorage.getItem("my_account_user"),
                'name': sp.name,
                'sale': sp.sale,
                'image': sp.image,
                'price': sp.price,
                'quantity': 1,
                'maxquantity': sp.quantily,
                'favorites': sp.favorites,
                'product_new': sp.product_new,
                'id': sp.id
            }
        }).then(function (reponse) {
            alert(reponse.data);
            $scope.get_all();
        })
    }
    $scope.get_all_cart_sr = function () {
        $http.get(`./PHP/Get_cart.php?name_accound=${sessionStorage.getItem("my_account_user")}`).then(function (res) {
            array_cart = res.data.cart;
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }
    $scope.get_cart_sr = function (sp) {
        if (sessionStorage.getItem("my_account_user") != null) {
            $scope.get_all_cart_sr();
            var count = 0;
            if ($scope.len_cart == 0) {
                $scope.add_cart_sr(sp);
            } else {
                for (var i = 0; i < array_cart.length; ++i) {
                    if (array_cart[i].name == sp.name) {
                        $scope.remove_sr(sp, `./PHP/remove_cart.php`);
                        count++;
                    }
                }
                if (count == 0) {
                    $scope.add_cart_sr(sp);
                }
            }
        }
        else {
            alert("Bạn phải đăng nhập để thực hiện thao tác này!");
        }
    }
    $scope.link_product_sr = function (name, id) {
        sessionStorage.setItem("storageID", id);
        sessionStorage.setItem("storageName", name);
        window.location.assign('./product.html');
    }
    // tìm kiếm
    $scope.next_search = function () {
        if (star_sr < search_arr.length && star_sr + jump_sr < search_arr.length) {
            star_sr = end_sr;
            if (end_sr + jump_sr > search_arr.length) {
                end_sr = search_arr.length;
            } else {
                end_sr += jump_sr;
            }
            $scope.text_sr += 1;
            $http({
                method: "GET",
                url: `./PHP/search.php?name=${$scope.search_product}`,
            }).then(function (response) {
                document.getElementById("pagination").style.display = "inline-block";
                search_arr = response.data.search;
                $scope.products_search = loop_search(star_sr, end_sr, search_arr);
            })
        }
    }

    $scope.prev_search = function () {
        if (end_sr - jump_sr > -1 && $scope.text_sr != 1) {
            end_sr = star_sr;
            star_sr -= jump_sr;
            $scope.text_sr -= 1;
            $http({
                method: "GET",
                url: `./PHP/search.php?name=${$scope.search_product}`,
            }).then(function (response) {
                document.getElementById("pagination").style.display = "inline-block";
                search_arr = response.data.search;
                $scope.products_search = loop_search(star_sr, end_sr, search_arr);
            })
        }
    }

    $scope.re_search = function (name) {
        if (name === undefined) {
            alert("Vui lòng nhập dữ liệu bạn muốn tìm!!");
        } else {
            $http({
                method: "GET",
                url: `./PHP/search.php?name=${name}`,
            }).then(function (response) {
                document.getElementById("pagination").style.display = "inline-block";
                search_arr = response.data.search;
                try {
                    if (search_arr[0].name != undefined) {
                        $scope.products_search = loop_search(star_sr, end_sr, search_arr);
                    }
                } catch (e) {
                    alert("Không có sản phẩm này!!");
                    document.getElementById("pagination").style.display = "none";
                }
            })
        }
    }
    $scope.search = function (name, text_sr, star_sr_inp, end_sr_inp) {
        if (name === undefined) {
            alert("Vui lòng nhập dữ liệu bạn muốn tìm!!");
        } else {
            $http({
                method: "GET",
                url: `./PHP/search.php?name=${name}`,
            }).then(function (response) {
                document.getElementById("pagination").style.display = "inline-block";
                search_arr = response.data.search;
                try {
                    if (search_arr[0].name != undefined) {
                        $scope.products_search = loop_search(star_sr_inp, end_sr_inp, search_arr);
                        $scope.text_sr = text_sr;
                        star_sr = star_sr_inp;
                        end_sr = end_sr_inp;
                    }
                } catch (e) {
                    alert("Không có sản phẩm này!!");
                    document.getElementById("pagination").style.display = "none";
                }
            })
        }
    }

    // định dạng tiền
    $scope.set_vnd = function (price) {
        return formatter.format(price);
    }

    /*login*/
    $scope.login = function (email, pass) {
        if (email === undefined) {
            alert("Vui lòng tài khoản email của bạn!!");
            document.getElementById("email_lg").style.border = "2px solid red";
            document.getElementById("pass_lg").style.border = "1px solid black";
        }
        else if (pass === undefined) {
            alert("Vui lòng nhập pass của bạn!!");
            document.getElementById("email_lg").style.border = "1px solid black";
            document.getElementById("pass_lg").style.border = "2px solid red";
        } else if (email != undefined && pass != undefined) {
            $http({
                method: "GET",
                url: `./PHP/get_accound.php?email=${email}&pass=${pass}`,
            }).then(function (response) {
                accound = response.data;
                if (accound.accound[0].Role == "admin") {
                    var link = document.querySelector("#link_account");
                    link.href = "./set_bill.html";
                } else {
                    var link = document.querySelector("#link_account");
                    link.href = "./purchase.html";
                }
                document.getElementById("email_lg").style.border = "1px solid black";
                document.getElementById("pass_lg").style.border = "1px solid black";
                try {
                    if (accound.accound[0].email != undefined) {
                        $scope.name_account = accound.accound[0].name;
                        sessionStorage.setItem("my_account_user", accound.accound[0].name); // lấy sesion tên 
                        alert("Xin chào bạn: " + accound.accound[0].name);
                        /* DOM set up interface */
                        document.getElementById('body').style.opacity = '1';
                        document.getElementById('footer_all').style.opacity = '1';
                        document.getElementById('set').style.transform = 'translate(-221px, -1000px)';
                        document.getElementById('set').style.position = 'fixed';
                        /* unset */
                        $scope.email_lg = "";
                        $scope.pass_lg = "";
                        $scope.reload_favorite();
                    } else {
                        alert("Tài khoản không tồn tại!!!");
                    }
                } catch {
                    alert("Tài khoản không tồn tại!!!");
                }
                $scope.get_all();
            })
        }
    }

    $scope.unlock_login = function () {
        if (sessionStorage.getItem("my_account_user") != null) {

            $scope.name_account = sessionStorage.getItem("my_account_user");
            var obj = document.getElementById('btn_hover');
            document.getElementById("login_Account").disabled = true; //khóa button
            var obj2 = document.getElementById('my_account_container');
            obj.onmouseover = function () {
                document.getElementById("my_account_container").style.display = 'flex';
            };
            obj2.onmouseover = function () {
                document.getElementById("my_account_container").style.display = 'flex';
            };
            obj.onmouseout = function () {
                document.getElementById("my_account_container").style.display = 'none';
            };
            obj2.onmouseout = function () {
                document.getElementById("my_account_container").style.display = 'none';
            };
        } else {
            document.getElementById("login_Account").disabled = false; //khóa button
            var obj = document.getElementById('btn_hover');
            obj.onmouseover = function () {
                document.getElementById("my_account_container").style.display = 'none';
            };
        }
    }

    $scope.out_login = function () {
        $scope.name_account = '';
        sessionStorage.removeItem('my_account_user');

        for (var i = 0; i < array.length; i++) {
            $scope.update(array[i], 0);
        }

        $scope.get_all();
        location.reload();
        alert("Bạn đã đăng xuất");
    }
});
function loop_search(star, end, search_arr) {
    var array_clone = [];
    count = 0;
    for (var i = star; i < end; ++i) {
        if (count < 5) {
            count++;
            array_clone.push(search_arr[i]);
        }
    }
    return array_clone;
};

function loop_img(array, name) {
    var array_clone = [];
    for (var i = 0; i < array.length; ++i) {
        if (array[i].name == name) {
            array_clone.push(array[i]);
        }
    }
    return array_clone;
}

function loop(star, end) {
    var array_clone = [];
    for (var i = star; i < end; ++i) {
        array_clone.push(array[i]);
    }
    return array_clone;
}

function nullify() {
    document.getElementById("list_null").innerHTML = "";
    document.getElementById("list_null").style.padding = "0px";
}

const formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})
var s = 60;
var btn = false;

function pay_momo() {
    sessionStorage.removeItem('ok');
    document.getElementById("momo").style.display = "block";

    document.getElementById('body').style.opacity = '0.5';
    document.getElementById('footer_all').style.opacity = '0.5';
    document.getElementById("navbar").style.opacity = '0.5';
    var s = 60;
    btn = false;
    run_count(s, btn);
}
function thanhtoan() {

    var MGD = $("#MGD_momo");
    if (isNotEmpty(MGD)) {
        btn = true;
        sessionStorage.setItem("ok", "ok");
        run_count(s, btn);
    }
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

function isNotEmpty(caller) {
    if (caller.val() == "") {
        caller.css('border', '2px solid red');
        return false;
    } else {
        caller.css('border', '');
    }

    return true;
}