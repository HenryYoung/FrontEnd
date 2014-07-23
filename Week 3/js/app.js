/*
  Henry Young
  Week 2
  Front-End Web Frameworks
*/

angular.module("MyApp",['ngRoute'])

    .config(function($routeProvider){
        
        $routeProvider.when('/view1',{
            templateUrl : "View1.html",
            controller : "ViewController"
        }).when ('/view2', {
            templateUrl : "View2.html",
            controller : "ViewController"
        }).otherwise ({
            redirectTo : "view1.html"
        });
    })
    
    .controller("View1Controller", function($scope) {
        $scope.test = "Hello World 1";    
    })
    
    .controller("View2Controller", function($scope) {
        $scope.test = "Hello World 2";    
    })
    
    .controller("MyAppController", function($scope) {
        $scope.test = "Hello World";
    })
    
    .controller("DBController",function($scope, dataService) {
        $scope.pName;
        $scope.pDetails;
        $scope.pDate;
        $scope.pPtps;
        
        $scope.myProject = dataService.getProject();
          
        $scope.addProject = function() {
             dataService.addProject($scope.pName,$scope.pDetails,$scope.pDate,$scope.pPtps);    
            
             $scope.pName = ' ';
             $scope.pDetails = ' ';
             $scope.pDate = ' ';
             $scope.pPtps = ' ';
            
    }
    
    $scope.deleteProject = function(deletedProject) {
        dataService.removeProject(deletedProject);
    }
});
    
    
    
    