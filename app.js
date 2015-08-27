var app = angular.module('census', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/states/:state', {
            templateUrl: '/Javascript/census/states/state.html',
            controller: 'stateCtrl',
            resolve: {
                stateData: function(service, $route) {
                    window.scrollTo(0,0);
                    return service.getPop($route.current.params.state);
                }
            }
        })
        .when('/map', {
            templateUrl: '/Javascript/census/map/map.html',
            controller: 'mapCtrl'
        })


});