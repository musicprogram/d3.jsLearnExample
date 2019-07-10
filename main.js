// const datos = [1,2,3,5,8,13,21,34,55,89,144];

// const x = d3.scaleLinear()
// 						.domain([0, d3.max(datos)])
// 						.range([0, 144])


// function graficar(){
// 	d3.select('.barras')
// 		.selectAll('div')
// 		.data(datos) 
// 		.enter().append('div')
// 		.style('width',(datos)=>{
// 			return x(datos) + 'px'
// 		})
// 		.text((datos)=>{
// 			return datos
// 		})
// }


// const seleccionar = ()=>{
// 	d3.selectAll('div')
// 		.style("background-color", "green")

// }

/*const seleccionarBloque = ()=>{
	d3.select('.bloque')
		.selectAll('div')
		.style("background-color", "blue")
		.style("color", "white")
		.style("padding", "5px")
		.style("margin", "5px")

}*/


/*const datos = [1,2,3,4,5,6,7,8,9,10]
const graficar = () =>{
	d3.select('.miGrafica')
		.selectAll('div')
		.data(datos)
		.enter().append('div')
		.text((d)=>{
			if(d === 1){
				return 'resultado obtenido ' + d
			}else{
				return 'resultados obtenidos ' + d
			}
			
		})
		.style("background-color", "blue")
		.style("color", "white")
		.style("padding", "5px")
		.style("margin", "5px")


}*/



const datos = [1,20,30,40,50,16,78,18,90,130]
const graficar = () =>{
	d3.select('.miGrafica')
		.selectAll('div')
		.data(datos)
		.enter().append('div')
		.attr('class', 'barras')
		.style('height', (d)=>{
			return d + 'px'
		})
	

}