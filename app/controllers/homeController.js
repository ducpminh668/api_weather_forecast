app.controller('homeController', function ($scope, cityService, $location) {
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.submit = () => {
        $location.path("/forecast")
    }
});
