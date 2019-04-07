"use strict";

angular.module("mkApp").directive("sample", function() {
  return {
    restrict: "E",
    replace: false,
    transclude: false,
    scope: {},
    templateUrl: "public/components/layout/sample.directive.html",
    controller: function($scope) {}
  };
});
