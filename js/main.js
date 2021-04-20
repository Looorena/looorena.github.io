JQuery(document).ready(functions($) {

	//Fixed Header
	window.onscroll = functions(){
		if(window.pageYOffset >140){
			$(".header").addClass("active");
		} else {
			$(".header").removeClass("active");
		}
	}
})