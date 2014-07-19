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
         dataService.addEmployee($scope.pName);
         dataService.addEmployee($scope.pStreet);
         dataService.addEmployee($scope.city);
         dataService.addEmployee($scope.pState);
         dataService.addEmployee($scope.pZip);     
        
         $scope.pName = ' ';
         $scope.pStreet = ' ';
         $scope.city = ' ';
         $scope.state = ' ';
         $scope.zipcode = ' ';
        
    }
    
    $scope.deleteEmployee = function(deletedEmployee) {
        dataService.removeEmployee(deletedEmployee);
    }
});
