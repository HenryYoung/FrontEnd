/*
  Henry Young
  Week 2
  Front-End Web Frameworks
*/

angular.module("MyApp").service("dataService",function() {
    
   var myProject = [ ];
      
   this.getProject = function() {
      var str = localStorage.getItem("NameLS");
      myProject = JSON.parse(str) || myProject;
      return myProject;
    }
    
    this.addProject = function(pName,pDetails,pDate,pPtps) {
      var o = {};
      o.name = pName;
      o.details = pDetails;
      o.date = pDate;
      o.ptps = pPtps;
      myProject.push(o);
      var str = JSON.stringify(myProject);
      localStorage.setItem("NameLS",str);
      }
    
    this.removeProject = function(pName,pDetails,pDate,pPtps) {
        myProject.splice(myProject.indexOf(pName,pDetails,pDate,pPtps),1);
        var str = JSON.stringify(myProject);
        localStorage.setItem("NameLS",str);
    }
});
