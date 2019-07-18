var home_button = $(`#home`)
var about_us_button = $(`#about_us`)
var play_button = $(`#play`)
var parent_info_button = $(`#parent_info`)

home_button.on("click", home_function);
function home_function(){
  window.location.href = "./index.html"
}

about_us_button.on("click", about_us_function);
function about_us_function(){
  window.location.href = "./aboutus.html"
}

play_button.on("click", play_function);
function play_function(){
  window.location.href = "./main.html"
}

parent_info_button.on("click", parent_info_function);
function parent_info_function(){
  window.location.href = "./parent-info.html"
}
