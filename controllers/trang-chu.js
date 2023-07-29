function quanLyController($scope, $http) {
    $scope.lstProduct = [];

    const apiProductUrl = "http://localhost:3000/products";


    $scope.product = {
        "id": "",
        "tenSP": "",
        "giaNhap": 0,
        "giaBan": 0,
        "soLuong": 0,
        "ngayNhapHang": "",
        "urlImage": "",
        "trangThai": ""
    };

    $scope.NhanVien = {
        "TenNV": "",
        "gioiTinh": "",
        "ngaySinh": "",
        "phoneNumber": "",
        "TrangThai": ""
    }
    $scope.idDuocChon = -1;


    $http.get(apiProductUrl)
        .then(function (response) {
            $scope.lstProduct = response.data;
            $scope.lstProduct.sort(function (a, b) {
                return b.id - a.id;
            });
        })
        .catch(function (error) { });




    // Hàm onSubmit()
    $scope.onSubmit = function (event) {
        event.preventDefault();
        if ($scope.idDuocChon == -1) {
            // Nút Thêm
            $http
                .post(apiProductUrl, $scope.product)
                .then(function () {
                    //Trường Hợp Thành Công
                    $scope.lstProduct.pust($scope.product);
                })
                .catch(function (error) {
                    //Trường Hợp Thất Bại
                    console.log(error);
                });

        } else {
            // Nút Sửa
            $http
                .put(apiProductUrl + '/' + $scope.product.id, $scope.product)
                .then(function () {
                    $scope.idDuocChon = -1;
                    $scope.lstProduct.splice($scope.idDuocChon, 1, $scope.product);
                }).catch(function (err) {
                    console.log(err);
                });
        }
    }

    //Hàm delete
    $scope.delete = function (index) {
        var id = $scope.lstProduct[index].id;
        $http
            .delete(apiProductUrl + '/' + id)
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
            .get(apiProductUrl + '/' + id)
            .then(function (response) {
                console.log(response);
                $scope.product = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    }


}