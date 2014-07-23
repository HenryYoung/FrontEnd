/*
  Henry Young
  Week 2
  Front-End Web Frameworks
*/

angular.module("MyApp",[ ],['ngRoute']).controller("DBController",function($scope, dataService) {
    $scope.pName;
    $scope.pStreet;
    $scope.pCity;
    $scope.pState;
    $scope.pZip;
    
    $scope.employeeProfile = dataService.getProfile();
      
    $scope.addEmployee = function() {
         dataService.addEmployee($scope.pName,$scope.pStreet,$scope.pCity,$scope.pState,$scope.pZip);    
        
         $scope.pName = ' ';
         $scope.pStreet = ' ';
         $scope.pCity = ' ';
         $scope.pState = ' ';
         $scope.pZip = ' ';
        
    }
    
    .config(function($routeProvider){
        
        $routeProvider.when('/view1',{
            templateUrl: "View1.html",
            controller: "ViewController"
        }).when ('/view2', {
            templateUrl: "View2.html",
            controller: "ViewController"
        }).otherwise ({
            redirectTo: "/view1"
        });
    })
    
    .controller("View1Controller", function($scope) {
        $scope.test = "Hello World 1";    
    })
    
    .controller("View2Controller", function($scope) {
        $scope.test = "Hello World 2";    
    })
    
    .controller("View3Controller", function($scope) {
        $scope.test = "Hello World";    
    })
    
    
    $scope.deleteEmployee = function(deletedEmployee) {
        dataService.removeEmployee(deletedEmployee);
    }
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    