angular.module('maintenance', ['ngRoute'])
    .controller('adminCtrl', AdminCtrl)
    .controller('mainCtrl', MainCtrl)
    .controller('locationsCtrl', LocationsCtrl)
    .controller('sitesCtrl', SitesCtrl)
    .factory('currentSpot', currentSpot)
    .directive('ywActiveMenu',ywActiveMenu)
    .config(function ($routeProvider) {
        $routeProvider.when('/locations', {controller:'locationsCtrl',
            templateUrl: 'views/locations.html'
        });
        $routeProvider.when('/sites', {
            controller: 'sitesCtrl',
            templateUrl: 'views/sites.html'
        });
        $routeProvider.otherwise({
            controller: 'mainCtrl',
            templateUrl: 'views/main.html'
        });
    });

function ywActiveMenu(currentSpot) {
    return function (scope, element, attrs) {
        var activeMenuId = attrs["ywActiveMenu"];
        var activeTitle = attrs["ywActiveTitle"];
        currentSpot.setCurrentSpot(activeMenuId, activeTitle);
    }
}

function AdminCtrl($scope, currentSpot) {
    $scope.isActive = isActive;
    $scope.getTitle = getTitle;

    function isActive(menuId) {
        return currentSpot.getActiveMenu() == menuId;
    }
    function getTitle() {
        return currentSpot.getTitle();
    }
}

function MainCtrl(currentSpot) {
    //currentSpot.setCurrentSpot('', '');
}


function LocationsCtrl(currentSpot) {
    //currentSpot.setCurrentSpot('Locations', 'Manage the list of diving locations!');
}

function SitesCtrl(currentSpot) {
    //currentSpot.setCurrentSpot('Sites', 'Manage the list of dive sites');
}



function currentSpot() {
    var activeMenuId = '';
    var titletext = '';

    return {
        setCurrentSpot: function (menuId, title) {
            activeMenuId = menuId;
            titletext = title;
        }, getActiveMenu: function () {
            return activeMenuId;
        },
        getTitle: function () {
            return titletext;
        }
    }
}

