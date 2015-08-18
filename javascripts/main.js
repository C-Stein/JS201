requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '/bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "firebase", "hbs", "bootstrap", "addMembers", "deleteMembers"], 
  function($, _firebase, Handlebars, bootstrap, addMembers, deleteMembers) {

    var myFirebaseRef = new Firebase("https://caitlin-family.firebaseio.com/");
    var familyArray = [];
    var familyMembers;
    
    myFirebaseRef.child("family").on("value", function(snapshot) {
   
      familyMembers = snapshot.val();
      console.log(familyMembers);
      

      for (var key in familyMembers) {

        familyArray[familyArray.length] = familyMembers[key];
      }
      console.log("familyMembers", familyMembers);
      loadFamily(familyMembers);
    });

    function loadFamily(data) {
      console.log("loadFamily called", data);
      require(['hbs!../templates/familyMembers'], function(template) {
        $("#familyList").html(template({family: data}));
      });
    }

    $("#addButton").on("click", function(){
    var familyData = {};
    
    //grab values from form and store in object
      familyData = {
        "name": $("#fullName").val(),
        "age": $("#age").val(),
        "gender": $("#gender").val(),
        "skills": $("#skills").val()
      };

      familyData = JSON.stringify(familyData);
      console.log("stringified familyData", familyData);
      addMembers.addMembers(familyData);
      $("#fullName").val("");
      $("#age").val("");
      $("#gender").val("");
      $("#skills").val("");
  });

});



