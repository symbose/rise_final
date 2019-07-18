var button = $(`#kay`);
var button_one = $(`#first`);
var button_two = $(`#two`);
var button_three = $(`#three`);

button.on("click", clicked);
function clicked(){
  window.location.href = "./main.html";
}

button_one.on("click", ones);
function ones(){
  window.location.href = "./aboutus.html";
}

button_two.on("click", two);
function two(){
  window.location.href = "./parent-info.html";
}

button_three.on("click", three);
function three(){
  window.location.href = "./how-to.html";
}
