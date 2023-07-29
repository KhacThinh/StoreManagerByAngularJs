// var myApp = angular.module("JsonServerDemo", []);

// myApp.controller("accountController", function ($scope, $http) {
//     // Khai báo biến
//     $scope.lstAccount = [];
//     // Khai báo hằng số đường dẫn api
//     const apiAccountUrl = "http://localhost:3000/khachHangs";
//     // Khai báo đối tượng
//     $scope.acc = {
//         id: 0,
//         firstName: "",
//         lastName: "",
//         gioiTinh: "",
//         email: "",
//         password: ""
//     }



//     // Hàm onSubmit()
//     $scope.onSubmit = function (event) {
//         event.preventDefault();
//         var emailExists = false; // Ban đầu đặt giá trị emailExists là false

//         // Kiểm tra xem email đã tồn tại trong danh sách tài khoản hay chưa
//         $scope.lstAccount.forEach(function (account) {
//             if (account.email === $scope.acc.email) {
//                 emailExists = true; // Đặt emailExists thành true nếu tìm thấy email trong danh sách
//             }
//         });

//         if (emailExists) {
//             alert("Email đã tồn tại");
//         } else {
//             // window.location.href = './login.html';
//             $http
//                 .post(apiAccountUrl, $scope.acc)
//                 .then(function () {
//                     // Trường hợp thành công
//                     $scope.lstAccount.pust($scope.acc);
//                     // window.location.href = './login.html';
//                 })
//                 .catch(function (error) {
//                     // Trường hợp thất bại
//                     console.log(error);
//                 })
//         }

//     }

// });


var myApp = angular.module("JsonServerDemo", []);

myApp.controller("accountController", function ($scope, $http) {
    // Khai báo biến
    $scope.lstAccount = [];
    // Khai báo hằng số đường dẫn api
    const apiAccountUrl = "http://localhost:3000/khachHangs";
    // Khai báo đối tượng
    $scope.acc = {
        id: 0,
        firstName: "",
        lastName: "",
        gioiTinh: "",
        email: "",
        password: ""
    }

    // Hàm lấy danh sách tài khoản từ API
    function getAccountList() {
        $http
            .get(apiAccountUrl)
            .then(function (response) {
                $scope.lstAccount = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Gọi hàm để lấy danh sách tài khoản khi controller được khởi tạo
    getAccountList();

    // Hàm kiểm tra khớp mật khẩu
    $scope.checkPassword = function () {
        $scope.passwordMatchError = $scope.acc.password !== $scope.confirm_password;
    };

    // Hàm onSubmit()
    $scope.onSubmit = function (event) {
        event.preventDefault();
        var emailExists = false; // Ban đầu đặt giá trị emailExists là false

        // Kiểm tra xem email đã tồn tại trong danh sách tài khoản hay chưa
        $scope.lstAccount.forEach(function (account) {
            if (account.email === $scope.acc.email) {
                emailExists = true; // Đặt emailExists thành true nếu tìm thấy email trong danh sách
            }
        });

        if (emailExists) {
            alert("Email đã tồn tại");
        } else if ($scope.passwordMatchError) {
            alert("Mật khẩu không khớp");
        } else {
            $http
                .post(apiAccountUrl, $scope.acc)
                .then(function () {
                    // Trường hợp thành công
                    getAccountList(); // Gọi lại hàm để cập nhật danh sách tài khoản
                    window.location.href = 'login.html'
                    // $location.path('/login.html');
                })
                .catch(function (error) {
                    // Trường hợp thất bại
                    console.log(error);
                })
        }
    }
});
