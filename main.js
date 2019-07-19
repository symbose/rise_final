// var button = $(`#add`);
// var waterbottle = $(`#one`);
// var straw = $(`#two`);
// var plastic = $(`#three`);
// var foodWaste = $(`#four`);
// // var showimage = $(``);
// var addPoints = 0;
//
// button.on("click", add);
//
// function add (){
//   event.preventDefault()
//
//
//   if (waterbottle.prop("checked") == true){
//     addPoints += 5;
//   }
//   if (straw.prop("checked") == true){
//     addPoints += 5;
//   }
//   if (plastic.prop("checked") == true){
//     addPoints += 5;
//   }
//   if (foodWaste.prop("checked") == true){
//     addPoints += 5;
//   }
//
//   $("#points").text(addPoints);
//
//   if (addPoints == 15){
//       toggleclass
//   }
//
//
//
// }

var button = $(`#add`);
var waterbottle = $(`#one`);
var straw = $(`#two`);
var plastic = $(`#three`);
var foodWaste = $(`#four`);
var lights = $(`#five`);
var clothes = $(`#six`);
var containers = $(`#seven`);
var litter = $(`#eight`);

button.on("click", add);

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
   if (lights.prop("checked") == true){
    addPoints += 5;
  }
   if (clothes.prop("checked") == true){
    addPoints += 5;
  }
   if (containers.prop("checked") == true){
    addPoints += 5;
  }
   if (foodWaste.prop("checked") == true){
    addPoints += 5;
  }
   if (litter.prop("checked") == true){
    addPoints += 5;
  }

  $("#points").text(addPoints);
}
