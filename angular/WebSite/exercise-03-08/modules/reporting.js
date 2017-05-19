angular.module('reporting', ['core'])
    .controller('reportingCtrl', ReportingCtrl)
    .config(function ($routeProvider) {
    $routeProvider.when('/reportings', {
        templateUrl: 'views/reporting.html',
        controller: 'reportingCtrl'
    });
    
});

function ReportingCtrl(currentSpot) {
}