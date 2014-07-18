/*
  Henry Young
  Week 2
  Front-End Web Frameworks
*/

angular.module("MyApp",[]).controller("DBController",function($scope, dataService) {
    $scope.employee;
    $scope.street;
    $scope.city;
    $scope.state;
    $scope.zipcode;
    
    $scope.employeeProfile = dataService.getProfile();
      
    $scope.addEmployee = function() {
         dataService.addEmployee($scope.employee);
         dataService.addEmployee($scope.street);
         dataService.addEmployee($scope.city);
         dataService.addEmployee($scope.state);
         dataService.addEmployee($scope.zipcode);     
        
         $scope.employee = ' ';
         $scope.street = ' ';
         $scope.city = ' ';
         $scope.state = ' ';
         $scope.zipcode = ' ';
        
    }
    
    $scope.deleteEmployee = function(deletedEmployee) {
        dataService.removeEmployee(deletedEmployee);
    }
});
