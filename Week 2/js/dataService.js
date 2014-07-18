/*
  Henry Young
  Week 2
  Front-End Web Frameworks
*/

angular.module("MyApp").service("dataService",function() {
    
   var employeeProfile = [ ];
      
   this.getProfile = function() {
      var str = localStorage.getItem("NameLS");
      employeeProfile = JSON.parse(str) || employeeProfile;
      return employeeProfile;
    }
    
    this.addEmployee = function(pName) {
      employeeProfile.push(pName);
      var str = JSON.stringify(employeeProfile);
      localStorage.setItem("NameLS",str);
    }
    
    this.removeEmployee = function(pName) {
        employeeProfile.splice(employeeProfile.indexOf(pName),1);
        var str = JSON.stringify(employeeProfile);
        localStorage.setItem("NameLS",str);
    }
});
