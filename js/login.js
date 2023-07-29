var app = angular.module('loginApp', []);

app.controller('LoginController', function ($scope, $http) {
    $scope.loginError = false;

    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;

        // Kiểm tra thông tin đăng nhập
        $http.get('db.json').then(function (response) {
            var users = response.data.khachHangs;
            var user = users.find(function (user) {
                return user.email === username && user.password === password;
            });

            if (user) {
                window.location.href = './index.html'; // Chuyển hướng đến trang chủ
            } else {
                $scope.loginErrorMessage = 'Tài khoản và mật khẩu không chính xác'; // Thiết lập thông báo lỗi
                $scope.loginError = true; // Hiển thị thông báo lỗi
            }
        }).catch(function (error) {
            console.log('Lỗi khi tải dữ liệu:', error);
        });
    };
});


function chuyentrangGG(){
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?dsh=S2047322258%3A1686371260005170&authuser=0&continue=https%3A%2F%2Fwww.google.com.vn%2F%3Fhl%3Dvi&ec=GAlAmgQ&hl=vi&flowName=GlifWebSignIn&flowEntry=AddSession';
}
