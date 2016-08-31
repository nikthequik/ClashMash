angular.module('home', ['ngRoute'])
.config( function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'view/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'hc'
	});
})
.controller('HomeCtrl', ["$scope", function($scope){
	var hc = this;
	hc.test = "slinky";
}])