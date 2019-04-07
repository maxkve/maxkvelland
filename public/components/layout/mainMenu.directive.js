"use strict";

angular.module("mkApp").directive("mainMenu", function() {
  return {
    restrict: "E",
    replace: false,
    transclude: false,
    scope: {},
    templateUrl: "public/components/layout/mainMenu.directive.html",
    controller: function($scope) {
      $scope.currentNavItem = "title";
    }
  };
});
