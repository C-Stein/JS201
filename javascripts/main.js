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
  ["jquery", "firebase", "hbs", "bootstrap"], 
  function($, _firebase, Handlebars, bootstrap) {

    var myFirebaseRef = new Firebase("https://caitlin-family.firebaseio.com/");
    
    
    myFirebaseRef.child('songs').on("value", function(snapshot) {
   
      familyMembers = snapshot.val();

      for (var key in familyMembers) {

        familyArray[familyArray.length] = familyMembers[key];
      }
      console.log("familyMembers", familyMembers);

    });




});