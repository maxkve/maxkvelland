"use strict";

angular.module("mkApp").directive("project", function() {
  return {
    restrict: "E",
    replace: false,
    transclude: false,
    scope: {
      project: "="
    },
    templateUrl: "public/components/layout/project.directive.html",
    controller: function($scope, $mdDialog) {
      function populateSamples() {
        if ($scope.project.sampleImg.length < 8 && $scope.project.projectTypeImg === "cellphone") {
          // Duplicate images if less than required number (8)
          let xMore = 8 - $scope.project.sampleImg.length;
          for (let i = 0; i < xMore; i++) {
            $scope.project.sampleImg.push($scope.project.sampleImg[i]);
          }
        }
      }

      $scope.openProjectDialog = function(ev, project, img) {
        $mdDialog
          .show({
            locals: { project: project, img: img },
            controller: DialogController,
            templateUrl: "public/components/layout/projectDialog.directive.html",
            parent: angular.element(document.body),
            project: project,
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false
          })
          .then(
            function() {
              // Hide event
            },
            function() {
              // Cancel event
            }
          );
      };

      function DialogController($scope, $mdDialog, project, img) {
        $scope.projectId = project.id;
        $scope.img = img;

        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
          $mdDialog.hide();
        };
      }
    }
  };
});
