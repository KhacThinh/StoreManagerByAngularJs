function hienThiDetail($http, $scope, $routeParams) {

    const apiProductUrl = "http://localhost:3000/products";
    $scope.productId = $routeParams.productId;
    $scope.product = {};

    $http.get(apiProductUrl + '/' + $scope.productId)
        .then(function (response) {
            $scope.product = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}