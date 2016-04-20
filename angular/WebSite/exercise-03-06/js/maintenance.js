angular.module('maintenance', ['ngRoute'])
    .controller('adminCtrl', AdminCtrl)
    .controller('mainCtrl', MainCtrl)
    .controller('locationsCtrl', LocationsCtrl)
    .controller('sitesCtrl', SitesCtrl)
    .controller('typesCtrl', TypesCtrl)
    .factory('currentSpot', currentSpot)
    .directive('ywActiveMenu', ywActiveMenu)
    .directive('ywMenuId', ywMenuId)
    .config(function ($routeProvider) {
        $routeProvider.when('/locations', {
            controller: 'locationsCtrl',
            templateUrl: 'views/locations.html'
        });
        $routeProvider.when('/sites', {
            controller: 'sitesCtrl',
            templateUrl: 'views/sites.html'
        });
        $routeProvider.when('/types', {
            controller: 'typesCtrl',
            templateUrl: 'views/types.html'
        });
        $routeProvider.otherwise({
            controller: 'mainCtrl',
            templateUrl: 'views/main.html'
        });
    });

var testSpot;

function ywMenuId(currentSpot) {
    var menuElements = [];
    testSpot = currentSpot;
    function setActive(element, menuId) {
        if (currentSpot.getActiveMenu() == menuId) {
            element.addClass('active');
        } else {
            element.removeClass('active');
        }
    }
    return function (scope, element, attrs) {
        var menuId = attrs["ywMenuId"];
        menuElements.push({ id: menuId, node: element });
        var watcherFn = function (watchScope) {
            return watchScope.$eval('getActiveMenu()');
        }
        scope.$watch(watcherFn, function (newValue, oldValue) {
            for (var i = 0; i < menuElements.length; i++) {
                var menuElement = menuElements[i];
                setActive(menuElement.node, menuElement.id);
            }
        });
    }
}

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
    $scope.getActiveMenu = getActiveMenu;

    function isActive(menuId) {
        return currentSpot.getActiveMenu() == menuId;
    }
    function getTitle() {
        return currentSpot.getTitle();
    }
    function getActiveMenu() {
        return currentSpot.getActiveMenu();
    }
}

function TypesCtrl() {

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

