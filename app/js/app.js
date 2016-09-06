angular.module('home', ['firebase', 'ngRoute'])
.config( ['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'view/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'hc'
	});
	
}])
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.controller('HomeCtrl', ['$http', '$firebaseObject', function($http, $firebaseObject){
	
  	var hc = this;
	var auth = firebase.auth();
	var provider = new firebase.auth.EmailAuthProvider();
	hc.sendToDb = function() {
		auth.signInWithEmailAndPassword(email, password)
		.then(function(user) {
			console.log(user);
			var clanRef = firebase.database().ref('clans'); 
			clanRef.on('child_added', function(data) { 
				console.log(data.val());
			});

		var postData = { id: '#' + hc.clanID, username : hc.username, password : hc.pword};
		// Get a key for a new Post.
		var newPostKey = firebase.database().ref('clans').push().key;
		// Write the new post's data simultaneously in the posts list and the user's post list. 
		var updates = {}; 
		updates[newPostKey] = postData; 
		firebase.database().ref('clans').update(updates);
		hc.clanID = '';
		hc.pword = '';
		hc.username = '';
		hc.join.$setPristine();
		hc.join.$setUntouched();
		});

	};
  	

	

	/*hc.test = "test";
	hc.display = function() {
		console.log(hc.clanID, hc.username, hc.pword);
	};
	hc.data = $http({
		method: 'GET', 
		url: 'https://api.clashofclans.com/v1/clans', 
		headers: {
		'Accept': 'application/json',
	    'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZjNzIwNzc3LWVhMDEtNDY5OC05MjE5LTY2NmYyYzQyZmI3NCIsImlhdCI6MTQ3Mjc3ODA4NSwic3ViIjoiZGV2ZWxvcGVyL2MxMDc1MDEzLWU2NmUtNzQ0Ni1lNjFjLWExODFhNTg5MGE5MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjY3LjE2NC4xNjUuMjA5Il0sInR5cGUiOiJjbGllbnQifV19.MhZmwubEdQUfI-SLdX2-IguPayRmv9uOLvVi2D9G3V9XHSsusEyQkHkXWavUgXoq-UkePsU_bfYhp2kQx-WkOw', 
		},
		params: {
			'name': 'detroit'
		}
	}).then(function(res) {
		hc.data = res;
	});*/
	/*console.log(hc.data);*/
}]);


/*'Access-Control-Allow-Origin': '*', 
	'Access-Control-Allow-Credentials': 'true', 
	"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT", 
	"Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"*/

/*eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZjNzIwNzc3LWVhMDEtNDY5OC05MjE5LTY2NmYyYzQyZmI3NCIsImlhdCI6MTQ3Mjc3ODA4NSwic3ViIjoiZGV2ZWxvcGVyL2MxMDc1MDEzLWU2NmUtNzQ0Ni1lNjFjLWExODFhNTg5MGE5MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjY3LjE2NC4xNjUuMjA5Il0sInR5cGUiOiJjbGllbnQifV19.MhZmwubEdQUfI-SLdX2-IguPayRmv9uOLvVi2D9G3V9XHSsusEyQkHkXWavUgXoq-UkePsU_bfYhp2kQx-WkOw*/