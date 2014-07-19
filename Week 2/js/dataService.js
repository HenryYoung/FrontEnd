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
    
    this.addEmployee = function(pName,pStreet,pCity,pState,pZip) {
      var o = {};
      o.name = pName;
      o.street = pStreet;
      o.city = pCity;
      o.state = pState;
      o.zip = pZip;
      employeeProfile.push(o);
      var str = JSON.stringify(employeeProfile);
      localStorage.setItem("NameLS",str);
      }
    
    this.removeEmployee = function(pName,pStreet,pCity,pState,pZip) {
        employeeProfile.splice(employeeProfile.indexOf(pName,pStreet,pCity,pState,pZip),1);
        var str = JSON.stringify(employeeProfile);
        localStorage.setItem("NameLS",str);
    }
});
