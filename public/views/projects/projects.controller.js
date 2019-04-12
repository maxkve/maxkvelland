"use strict";

angular.module("mkApp").controller("projectsController", function($scope, projectService) {
  $scope.projects = projectService.getProjectsReadOnly();
});
