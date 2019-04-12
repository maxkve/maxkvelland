"use strict";

angular.module("mkApp").service("projectService", function() {
  let projects = {
    migrationsverket: {
      id: "migrationsverket",
      title: "Migrationsverket",
      projectTypeImg: "cellphone",
      sampleImg: ["1.png", "2.png", "3.png"],
      description: ""
    },
    foodcheck: {
      id: "foodcheck",
      title: "Foodcheck",
      projectTypeImg: "cellphone",
      sampleImg: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      description: ""
    },
    foundme: {
      id: "foundme",
      title: "FoundMe",
      projectTypeImg: "cellphone",
      sampleImg: ["1.png", "2.png", "3.png", "4.png"],
      description: ""
    },
    samverkansytan: {
      id: "samverkansytan",
      title: "Samverkansytan",
      projectTypeImg: "cellphone",
      sampleImg: ["1.png", "2.png", "3.png", "4.png", "5.png"],
      description: ""
    },
    randomraiders: {
      id: "randomraiders",
      title: "Random Raiders",
      projectTypeImg: "monitor",
      sampleImg: [],
      description: ""
    }
  };

  this.getProjectsReadOnly = function() {
    return angular.copy(projects);
  };

  this.getProjects = function() {
    return projects;
  };

  this.getProject = function(id) {
    return projects[id];
  };
});
