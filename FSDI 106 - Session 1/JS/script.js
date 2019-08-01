
function createNew(){
  var text = $("#txttest").val();


  var list = $("#todos");
  list.append('<li class="list-group-item list-group-item-primary"> '+ text + '<img class="jv-jq" src="images/jq-logo.png" alt="">' + '</li>' + '<br>');

  $("#txttest").val("").focus();
}



function init2(){
  //change the text on the fielfd
  // hard refresh of browser Ctrl + F5
  /*
  *jquery SELECTOR:
  *# = id
  * TAG
  */
  // $("#txttest").val("LAST");
  //
  // //assign the click event
  //
  $("#btn").click(createNew);
  $("#txttest").keypress(function(args) {

      if(args.keyCode == 13){
          createNew();
      }



  });

}


$(document).ready(init2);
