var myApp = angular.module('myApp', []);
var array = [];

var array_favorite = [];
var aName = [];
var array_cart = [];
var search_arr = [];
var jump = 5;
var star = 0;
var end = jump;
var size_product = Math.ceil((array.length) / jump);
/* search*/
var jump_sr = 5;
var star_sr = 0;
var end_sr = jump_sr;

/* lấy id tab */
var s1 = 1;
var s2 = 6;
var s3 = 9;
myApp.controller('myController', function ($scope, $http) {
    $scope.text = 1;
    $scope.text_sr = 1;

    //lấy toàn bộ sản phẩm
    $http.get('./PHP/connect.php').then(function (res) {
        array = res.data.Product;
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
        $scope.products = loop(star, array.length, s1);
        $scope.products_ao = loop(star, array.length, s2);
        $scope.products_pk = loop(star, array.length, s3);
    }, function () {
        alert("Lỗi kết nối dữ liệu!!!");
    });

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
    $scope.set_favorite = function () {
        for (var i = 0; i < array_favorite.length; i++) {
            $scope.update(array_favorite[i], 1);
            $scope.get_class(array_favorite[i].favorite);
        }
        $scope.reload_sp();
    }

    //load lại sp
    $scope.reload_sp = function () {

        // $scope.reload_favorite();
        $scope.get_all_cart();

        $http.get('./PHP/connect.php').then(function (res) {
            array = res.data.Product;

            $scope.products = loop(star, array.length, s1);
            $scope.products_ao = loop(star, array.length, s2);
            $scope.products_pk = loop(star, array.length, s3);
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }

    // load tất cả
    $scope.get_all_in = function () {
        $http.get('./PHP/connect.php').then(function (res) {
            array = res.data.Product;
            $scope.products = loop(star, end);
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }

    /* giày */
    $scope.get_all = function (id) {
        s1 = id;
        $http.get('./PHP/connect.php').then(function (res) {
            array = res.data.Product;
            $scope.products = loop(star, array.length, id);
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }
    /* áo */
    $scope.get_all_ao = function (id) {
        s2 = id;
        $http.get('./PHP/connect.php').then(function (res) {
            array = res.data.Product;
            $scope.products_ao = loop(star, array.length, id);
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }
    /* phụ kiện*/
    $scope.get_all_pk = function (id) {
        s3 = id;
        $http.get('./PHP/connect.php').then(function (res) {
            array = res.data.Product;
            $scope.products_pk = loop(star, array.length, id);
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }

    $scope.get_class = function (a) {
        if (a == 1) {
            $scope.text_class = "fa-heart";
        } else if (a == 0) {
            $scope.text_class = "fa-heart-o";
        } else {
            $scope.text_class = "fa-heart-o";
        }
    }
    //set class
    $scope.add = function (sp, index) {
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

    $scope.remove = function (sp, index) {
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

    $scope.like = function (sp) {
        if (sessionStorage.getItem("my_account_user") != null) {
            if (sp.favorites == 0) {
                $scope.update(sp, 1);
                $scope.add(sp, `./PHP/insert_favorite.php`);
            }
            else {
                $scope.update(sp, 0);
                $scope.remove(sp, `./PHP/delete_favorite.php`);
            }
            $scope.reload_sp();
            if ($scope.search_product != null) {
                $scope.re_search($scope.search_product);
            }
        }
        else {
            alert("Bạn phải đăng nhập để thực hiện thao tác này!");
        }
    }
    /* cart */

    $scope.len_cart = 0;
    $scope.add_cart = function (sp) {
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
        })
    }
    $scope.get_all_cart = function () {
        $http.get(`./PHP/Get_cart.php?name_accound=${sessionStorage.getItem("my_account_user")}`).then(function (res) {
            array_cart = res.data.cart;
            try {
                if (array_cart[0].name != undefined) {
                    $scope.products_cart = loop_rep(array_cart);
                    $scope.len_cart = array_cart.length;

                    document.getElementById("cart_null").style.display = "none";
                    document.getElementById("cart_checkout").style.display = "block";
                }
            } catch (e) {
                document.getElementById("cart_null").style.display = "flex";
                document.getElementById("cart_checkout").style.display = "none";
                $scope.len_cart = 0;
            }
        }, function () {
            alert("Lỗi kết nối dữ liệu!!!");
        });
    }
    $scope.get_cart = function (sp) {
        $scope.get_all_cart();
        var count = 0;
        if (sessionStorage.getItem("my_account_user") != null) {
            if ($scope.len_cart == 0) {
                $scope.add_cart(sp);
            } else {
                for (var i = 0; i < array_cart.length; ++i) {
                    if (array_cart[i].name == sp.name) {
                        $scope.remove(sp, `./PHP/remove_cart.php`);
                        count++;
                    }
                }
                if (count == 0) {
                    $scope.add_cart(sp);
                }
            }
        } else {
            alert("Bạn phải đăng nhập để thực hiện thao tác này!");
        }
        $scope.reload_sp();
    }
    $scope.remove_checkout = function (sp) {
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
                $scope.get_all_cart();
            })
        }
        else {
            alert("Bạn phải đăng nhập để thực hiện thao tác này!");
        }
    }
    $scope.sum_vnd = function () {
        var count = 0;
        for (var i = 0; i < $scope.len_cart; ++i) {
            count += array_cart[i].price * array_cart[i].quantity;
        }
        return count;
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
            $scope.get_all_cart();
        })
    }
    $scope.set_vnd = function (price) {
        return formatter.format(price);
    }
    $scope.link_product = function (name, id) {
        sessionStorage.setItem("storageID", id);
        sessionStorage.setItem("storageName", name);
        window.location.assign('./product.html');
    }
    /* search */
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

        $scope.reload_sp();
        alert("Bạn đã đăng xuất");
    }
});

function loop_rep(arr) {
    var array_clone = [];
    count = 0;
    for (var i = arr.length - 1; i > -1; --i) {
        if (count < 3) {
            count++;
            array_clone.push(arr[i]);
        }
    }
    return array_clone;
}
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
}
function loop(star, end, id) {
    var array_clone = [];
    count = 0;
    for (var i = star; i < end; ++i) {
        if (array[i].id == id && count < 5) {
            count++;
            array_clone.push(array[i]);
        }
    }
    return array_clone;
}
const formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})

