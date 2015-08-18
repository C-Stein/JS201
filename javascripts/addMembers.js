define(function() {
  
  return {

    addMembers: function(newMember) {

      $.ajax({
        url:"https://caitlin-family.firebaseio.com/family.json",
        method: "POST",
        data: newMember
      }).done(function(addedMember){
        console.log("addedMember", addedMember);
      });
    }
      

  };
});