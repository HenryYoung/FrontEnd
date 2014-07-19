/*
  Henry Young
  Week 2
  Front-End Web Frameworks
*/

angular.module("MyApp",[]).controller("DBController",function($scope, dataService) {
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
    
    $scope.deleteEmployee = function(deletedEmployee) {
        dataService.removeEmployee(deletedEmployee);
    }
});
    