$(function(){


	class UserLocation{
		static get(callback){

			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat:location.coords.latitude,
						lng:location.coords.longitude
					})
				})
			}else{
				alert("No pudimos detectar el lugar en el que te encuentras.")
				
				// return{
				// 	lat:0,
				// 	lng:0
				// }
			}
		}
	}

	const my_place = {
		lat:-11.5607123,
		lng:-77.2707498
	}

	


	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(
			document.getElementById("map"),{
				center:my_place,
				zoom:15
			}
		)

		const marker = new google.maps.Marker({
			map:map,
			position:my_place,
			title:"Restaurante Food",
			visible:true
		})



		UserLocation.get((coords)=>{
		// calcular distancia del restauramte al usuario

		// alert("ya tengo las coordenadas del usuario")
			let origen =  new google.maps.LatLng(coords.lat,coords.lng)//LatLng
			let destino = new google.maps.LatLng(my_place.lat,my_place.lng)

			let service = new google.maps.DistanceMatrixService()
			service.getDistanceMatrix({
				origins:[origen],
				destinations:[destino],
				travelMode:google.maps.TravelMode.DRIVING
			},(response,status)=>{
				if(status === google.maps.DistanceMatrixStatus.OK){
					const duration_element = response.rows[0].elements[0]
					console.log(duration_element)
					const duracion_viaje = duration_element.duration.text;
					const distancia_viaje = duration_element.distance.text;
					document.querySelector("#message")
						.innerHTML=`
							Estas a ${duracion_viaje} de una noche inolvidable en 
							<span class="dancing-script medium">
								Restaurante Food
							</span>
						`
				}else{
					document.querySelector("#message")
						.innerHTML=`
							Una noche inolvidable en 
							<span class="dancing-script medium">
								Restaurante Food
							</span>
						`
				}
				console.log(status)

			})
		})


	})
})