app.controller('forecastController', function ($scope, cityService, $resource, $routeParams, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;

    $scope.weatherAPI = weatherService.getWheather($scope.city, $scope.days);

    $scope.converToDateTime = (dt) => {
        return new Date(dt * 1000);
    }
});
