var home_button = $(`#home`)
var how_to_button = $(`#how-to`)
var information_button = $(`#information`)
var parent_info_button = $(`#parent_info`)

home_button.on("click", home_function);
function home_function(){
  window.location.href = "./index.html"
}

how_to_button.on("click", how_to_function);
function how_to_function(){
  window.location.href = "./how-to.html"
}

information_button.on("click", information_function);
function information_function(){
  window.location.href = "./main.html"
}

parent_info_button.on("click", parent_info_function);
function parent_info_function(){
  window.location.href = "./aboutus.html"
}
