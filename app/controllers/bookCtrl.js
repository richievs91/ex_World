"use strict";

app.controller('bookCtrl', function($scope){
	
$scope.guides = []; 

function getGuides(){
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `../data/guides.json`,
		}).done(function(data) {
			resolve(data.guides);
		}).fail((error) => {
			reject(error);
		});
	});
}

getGuides()
	.then(data => {
		$scope.guides = data;
		$scope.$apply();
		console.log("guide data", $scope.guides);
	});
});