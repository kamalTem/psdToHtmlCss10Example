var popup = document.querySelector(".modal-content");
var link = document.querySelector(".login");
var closePopup = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".modal-content-map-close");

link.addEventListener("click",function(event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
	login.focus();
});
mapOpen.addEventListener("click",function(event){
	mapPopup.classList.add("modal-content-map-op");
});

closePopup.addEventListener("click",function(event){
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	mapPopup.classList.remove("modal-content-map-op");
});
mapClose.addEventListener("click",function(event){
	event.preventDefault();
	mapPopup.classList.remove("modal-content-map-op");
});
window.addEventListener("keydown",function(event){
	if(event.keyCode === 27){
		popup.classList.remove("modal-content-show");
	}
});
