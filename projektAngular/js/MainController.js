app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Plan your day easier'; 
  $scope.tasktitle = "Create daily task";
}]);

app.controller('TasksController', ['$scope', function($scope) { 
  $scope.days = [
	 
  ]

$scope.createTask = function(day, task) {
	$scope.days.push({day: day, tasks: [task]})
	console.log($scope.days)
	
}
 

}]);


