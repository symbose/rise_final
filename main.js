var button = $(`#add`);
var waterbottle = $(`#one`);
var straw = $(`#two`);
var plastic = $(`#three`);
var foodWaste = $(`#four`);
var lights = $(`#five`);
var clothes = $(`#six`);
var containers = $(`#seven`);
var litter = $(`#eight`);
var rewardsButton = $(`#rewards`);
var addPoints = 0;


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

  return addPoints;
}

rewardsButton.on("click", changeColors);

function changeColors() {

if (add()==5){
  var fish = $('#apple');
  rewardsButton.toggleClass('pink');
  fish.toggleClass('hide');
}

else if (add()==10){
  var clown = $('#banana');
  rewardsButton.toggleClass('pink');
  clown.toggleClass('hid');
}

// else if (add()==15){
//   var octopus = $('#pear');
//   rewardsButton.toggleClass('pink');
//   octopus.toggleClass('hid');
//
// }
