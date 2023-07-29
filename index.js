var myApp = angular.module("JsonServerDemo", []);

myApp.controller("accountController", function ($scope, $http) {
    $scope.lstProduct = [];

    const apiAccountUrl = "http://localhost:3000/products";

    // Khai báo đối tượng
    $scope.acc = {
        "id": "",
        "tenSP": "",
        "giaNhap": 0,
        "giaBan": 0,
        "soLuong": 0,
        "ngayNhaphang": "",
        "url": "",
        "trangThai": ""
    };
    $scope.idDuocChon = -1;


    // Gọi api lấy danh sách 
    $http.get(apiAccountUrl).then(function (response) {
        $scope.lstProduct = response.data;
    }).catch(function (error) {
        console.log(error);
    })

    // Hàm onSubmit()
    $scope.onSubmit = function (event) {
        event.preventDefault();
        if ($scope.idDuocChon == -1) {
            // Nút Thêm
            $http
                .post(apiAccountUrl, $scope.acc)
                .then(function () {
                    //Trường Hợp Thành Công
                    $scope.lstProduct.pust($scope.acc);
                })
                .catch(function (error) {
                    //Trường Hợp Thất Bại
                    console.log(error);
                });

        } else {
            // Nút Sửa
            $http
                .put(apiAccountUrl + '/' + $scope.acc.id, $scope.acc)
                .then(function () {
                    $scope.idDuocChon = -1;
                    $scope.lstProduct.splice($scope.idDuocChon, 1, $scope.acc);
                }).catch(function (err) {
                    console.log(err);
                });
        }

    }

    //Hàm delete
    $scope.delete = function (index) {
        var id = $scope.lstProduct[index].id;
        $http
            .delete(apiAccountUrl + '/' + id)
            .then(function () {
                $scope.lstProduct.splice(index, 1);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //Hàm Select 
    $scope.select = function (index) {
        var id = $scope.lstProduct[index].id;
        $scope.idDuocChon = index;
        $http
            .get(apiAccountUrl + '/' + id)
            .then(function (response) {
                console.log(response);
                $scope.acc = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    }

});