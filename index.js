
var button = $(`#kay`);
var button_one = $(`#first`);

button.on("click", clicked);
function clicked(){
  window.location.href = "./main.html";

}

button_one.on("click", ones);
function ones(){
  window.location.href = "./aboutus.html";

}
