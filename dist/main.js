;(function(){

	let sticky = false;
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	$(window).scroll(function(){

		const isBottom = isInBottom();

		if(isBottom && !sticky){
			console.log("cambiar navegacion")
			sticky = true
			stickNavigation()
		} 
		if(!isBottom && sticky){
			sticky = false;
			console.log("no cambiar navegacion")
			unStickNavigation()

		}
	})

	function isInBottom(){
		const description = $("#description")
		const descriptionHeight = description.height()
		// console.log($(window).height())

		return $(window).scrollTop() > $(window).height() - descriptionHeight;
	}

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navegation").slideUp()
		// $("#navegation").slideUp().addClass("hidden")
		$("#sticky-navigation").slideDown()

		// $("#sticky-navigation").slideDown().removeClass("hidden")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navegation").slideDown("fast")
		$("#sticky-navigation").slideUp()
		// $("#navegation").slideDown().removeClass("hidden")
		// $("#sticky-navigation").slideUp().addClass("hidden")
	}
	// isInBottom()

})()
