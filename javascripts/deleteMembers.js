
define(["firebase"],function(_firebase) {

 return {
   delete: function(argument) {
     var ref = new Firebase("https://caitlin-family.firebaseio.com/family/" + argument);
     ref.remove();
     console.log("ref", argument);
   }
 };

}); 