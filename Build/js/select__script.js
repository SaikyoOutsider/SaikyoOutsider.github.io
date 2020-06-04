const optionsList = document.querySelectorAll(".option");
const selected = document.querySelector(".selected p");
const select = document.querySelector('select');

$(document).click(function(e) {
	if ($('.options-container').has(e.target).length == 0){
		$('.options-container').removeClass("active");
	}
});

$('.selected').click(function (event){
  $('.options-container').toggleClass("active");
});

for(let i=0; i<optionsList.length ;i++){
  $(optionsList[i]).click(function (event){
  	selected.innerHTML = this.querySelector("label").innerHTML;
    $('.options-container').removeClass("active");
    select.selectedIndex = this.querySelector("input").id;
  });
}