/*
  Henry Young
  Week 3
  Front-End Web Frameworks
*/

angular.module("MyApp",['ngRoute','xeditable'])

    .config(function($routeProvider){
        
        $routeProvider.when('/view1',{
            templateUrl : "View1.html",
            controller : "View1Controller"
        }).when ('/view2', {
            templateUrl : "View4.html",
            controller : "View2Controller"
        }).when ("/view3/:paramTest",
            {
                templateUrl : "View3.html",
                controller : "View3Controller"
        })
        
        .otherwise ({
            redirectTo : "view1.html"
        });
    })
    
    .controller("View1Controller", function($scope) {
        $scope.test = "Hello World 1";    
    })
    
    .controller("View2Controller", function($scope) {
        $scope.test = "Hello World 2";    
    })
    
    .controller("View3Controller", function($scope, $routeParams) {
        $scope.test = "Hello World 3";
        $scope.otherTest = $routeParams.paramTest;
    })
    
    .controller("MyAppController", function($scope) {
        $scope.test = "Hello World";
    })
    
    .run(function(editableOptions) {
        editableOptions.theme = 'bs2';
    })
    
    .controller("DBController",function($scope, dataService) {
        $scope.pName;
        $scope.pDetails;
        $scope.pDate;
        $scope.pPtps;
        $scope.isNew;
        
        $scope.myProject = dataService.getProject();
          
        $scope.addProject = function() {
             dataService.addProject($scope.pName,$scope.pDetails,$scope.pDate,$scope.pPtps,$scope.isNew);    
            
             $scope.pName = ' ';
             $scope.pDetails = ' ';
             $scope.pDate = ' ';

            
    }
    
    $scope.deleteProject = function(deletedProject) {
        dataService.removeProject(deletedProject);
    }
});
    
    
    
    