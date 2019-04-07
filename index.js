(function() {
  /// /////////////////////////////////////////////////////////////////////////////////
  // Angular app
  /// /////////////////////////////////////////////////////////////////////////////////
  let ngApp = angular.module("mkApp", ["ngRoute", "ngMaterial", "ngMessages"]);
  ngApp.run([
    "$rootScope",
    "$route",
    function($rootScope, $route) {
      console.log("Booting up...");
      $rootScope.$on("$routeChangeSuccess", function() {
        document.title = $route.current.title;
      });
    }
  ]);

  ngApp.config(function($routeProvider) {
    $routeProvider
      .when("/title", {
        templateUrl: "../public/views/title/title.directive.html",
        controller: "titleController"
      })
      .when("/projects", {
        templateUrl: "../public/views/projects/projects.directive.html",
        controller: "projectsController"
      })
      .when("/contact", {
        templateUrl: "../public/views/contact/contact.directive.html",
        controller: "contactController"
      });
  });
  ngApp.config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("blue")
      .accentPalette("pink")
      .warnPalette("red")
      .backgroundPalette("grey");
  });
})();
