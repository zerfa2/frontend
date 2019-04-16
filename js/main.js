;(function(){

	let sticky = false;
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)


	// Intervalo para slider
	let currentPosition = 0;
	const imageCounter = 4;
	// const counter = $("[data-name='image-counter']").attr("content");
	// console.log(counter)
	setInterval(()=>{
		console.log("eiiii")
		if(currentPosition < imageCounter){
			currentPosition ++
		}else{
			currentPosition =0
		}
		$("#gallery .inner").css({
			left:"-"+currentPosition*100+"%"
		})
	},5000)


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
	
	$("#contact-form").on("submit",function(e){
		// sendForm($(this))
		sendForm(e)

	})

	function sendForm(e){
		e.preventDefault()

		// let email = document.getElementsByName("email");
		// let name = document.getElementsByName("name");
		// let body = document.getElementsByName("body");

		// console.log(email[0].value);
		// console.log(name[0].value);
		// console.log(body[0].value);
		var formdata = new FormData($("#contact-form")[0])
				// console.log($form.attr("action"));
		$.ajax({
			url: "https://getform.io/f/1eebcd57-6e5e-4cb6-bc93-45f8e5ac1cfb",
			crossDomain: true, 
			method:"POST",
			data:formdata,
			dataType:"json",
		    processData: false, 
            contentType: false,
         //    headers: {
         //    	,
         //    	'Content-Type': 'formdata',
        	// },

			success:function(response){
				console.log("si")
			   if (response.status == "success") { 
                   alert ("Recibimos tu envío, ¡gracias!"); 
                 } else { 
                   alert ("Ocurrió un error."); 
               } 
			},
			error:function(response){
				// console.log(ee.status)
				 if (response.status == "200") { 
				 	$("#form-active1").val("")
				 	$("#form-active2").val("")
				 	$("#form-active3").val("")
				 	$(".font-form").html("Recibimos tu mensaje, muy pronto nos pondremos en contacto.¡gracias!")
                   // alert ("Recibimos tu envío, ¡gracias!"); 
                 } else { 
                   alert ("Ocurrió un error."); 
               } 

			}
		})

	}



	$("#form-active1").on("click keyup",(e)=>{
		console.log()
		// const valorForm = e.target;
		$(".hove2.active").removeClass("active")
		$(".hove3.active").removeClass("active")
		$(".hove1").addClass("active")
	})

	$("#form-active2").on("keyup click",(e)=>{
		// console.log($("#form-active2").index())
		const valorForm = e.target;
		$(".hove1.active").removeClass("active")
		$(".hove3.active").removeClass("active")
		$(".hove2").addClass("active")
	})
	$("#form-active3").on("keyup click",(e)=>{
		// console.log($("#form-active3").index())
		const valorForm = e.target;
		$(".hove1.active").removeClass("active")
		$(".hove2.active").removeClass("active")
		$(".hove3").addClass("active")
	})

	$("#menu-open").on("click",toggleNav)
	
	$(".menu-link").on("click",toggleNav)

	function toggleNav(){
		$("#responsive-nav ul").toggleClass("active")
		$("#menu-open").toggleClass("glyphicon-menu-hamburger")
	}

isOpen()
	function isOpen(){
		let fecha = new Date() 
		const current_hour = fecha.getHours();
		console.log(fecha)
		if(current_hour >17 || current_hour <9){
			 $("#is-open .text").html("Cerrado ahora <br>Abierto de 9am a 5pm")
		}
		console.log(current_hour)
	}
// api AIzaSyAlGt96nuhkJLesEhyaX2td5dxkLdgOEhY
})()