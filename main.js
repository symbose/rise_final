var button = $(`#add`);
var waterbottle = $(`#one`);
var straw = $(`#two`);
var plastic = $(`#three`);
var foodWaste = $(`#four`);

button.on("click", add)

function add (){
  event.preventDefault()
  var addPoints = 0;

  if (waterbottle.prop("checked") == true){
    addPoints += 5;
  }
  if (straw.prop("checked") == true){
    addPoints += 5;
  }
  if (plastic.prop("checked") == true){
    addPoints += 5;
  }
  if (foodWaste.prop("checked") == true){
    addPoints += 5;
  }

  $("#points").text(addPoints);
}
