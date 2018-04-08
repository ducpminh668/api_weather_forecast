let app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        console.log(next);
        console.log(current);
    });
}]);
