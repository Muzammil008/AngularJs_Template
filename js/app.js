
var app = angular.module("app", ["maincontrollermodule","ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : "pages/Home.html",
        controller:"MainController"
    })
    .when('/About',{
        templateUrl : "pages/About.html",
        controller:"MainController"
    })
    .when('/Contact',{
        templateUrl : "pages/Contact.html",
        controller:"MainController"
    });
});

