angular.module('diveLog', [])
    .controller('diveLogCtrl', DiveLogCtrl)
    .factory('diveLogApi', diveLogApi)
    .constant('apiUrl','http://unraveling-ng.azurewebsites.net');

function DiveLogCtrl($scope, diveLogApi) {
    $scope.dives = [];
    $scope.isLoading = isloading;
    $scope.errorMessage = '';
    $scope.refreshDives = refreshDives;

    var loading = false;

    function isloading() {
        return loading;
    }


    function refreshDives() {
        loading = true;
        $scope.dives = [];
        $scope.errorMessage = '';
        diveLogApi.getDives().success(function (data){//resolved
                $scope.dives = data;
                loading = false;
            }). error(function (reason) {//rejected
                $scope.errorMessage = reason;
                loading = false;
            });
    }
}

function diveLogApi($http,apiUrl) {
       return {
        getDives: function () {
            var url = apiUrl + '/api/backendtest/dives';
            return $http.get(url);
        }
    };
}

