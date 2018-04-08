app.directive('weatherReport', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/views/weatherReport.html',
        replace: true,
        scope: {
            wheatherDay: '=',
            converToDate: '&',
            dateFormat: "@"
        }

    }
});
