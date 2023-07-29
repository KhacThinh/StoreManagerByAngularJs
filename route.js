// Khởi tạo ứng dụng
// Khai báo thư viện phụ thuộc - dêpndences
var myApp = angular.module('myApp', ["ngRoute"]);

// Khai báo controller
myApp.controller('quanLyController', quanLyController);
myApp.controller('hienThiDetail', hienThiDetail);
// myApp.controller('accountController', accountController);


// Cấu hình chuyển đổi nội dung với app
myApp.config(function ($routeProvider, $locationProvider) {
    // Xóa khoảng trắng
    $locationProvider.hashPrefix("");

    // cấu hình chuyển trang
    $routeProvider
        .when("/trang-chu", {
            templateUrl: "./pages/trangChu.html",
        })
        .when("/bo-suu-tap", {
            templateUrl: "./pages/bosuutap.html",
            controller: "quanLyController"
        })
        .when("/lua-chon-dac-biet", {
            templateUrl: "./pages/luaChonDacBiet.html",
            // controller: "gioiThieuController"
        })
        .when("/pho-bien", {
            templateUrl: "./pages/phoBien.html",
        })
        .when("/quan-ly-san-pham", {
            templateUrl: "./pages/quanLySanPham.html",
            controller: "quanLyController"
        })
        .when('/detailProduct/:productId', {
            templateUrl: './pages/detailProduct.html',
            controller: 'hienThiDetail'
        })
        // .when('login', {
        //     templateUrl: './pages/detailProduct.html',
        //     controller: ''
        // })
        .otherwise({
            redirectTo: "/trang-chu"
        })
})


