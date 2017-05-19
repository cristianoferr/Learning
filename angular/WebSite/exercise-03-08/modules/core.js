angular.module('core', [])
    .factory('currentSpot', currentSpot)
    .directive('ywActiveMenu', ywActiveMenu)
    .directive('ywMenuId', ywMenuId);


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

function ywActiveMenu(currentSpot) {
    return function (scope, element, attrs) {
        var activeMenuId = attrs["ywActiveMenu"];
        var activeTitle = attrs["ywActiveTitle"];
        currentSpot.setCurrentSpot(activeMenuId, activeTitle);
    }
}

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