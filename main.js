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



/*const datos = [1,20,30,40,50,16,78,18,90,130]
const graficar = () =>{
	d3.select('.miGrafica')
		.selectAll('div')
		.data(datos)
		.enter().append('div')
		.attr('class', 'barras')
		.style('height', (d) =>{
			return d + 'px'
		})
	

}*/


/*var datos = [1,2,5,6,20,30,80,120,150,240,300]


const graficar = ()=>{
	const svg = d3.select('body')
								.append('svg')
	const circulo = svg.selectAll('circle')
											.data(datos)
											.enter().append('circle')	

	circulo.attr('cx',(d,i)=>{
		return (i * 80) + 25;
	})
	.attr('cy', 300 / 2)
	.attr('r',(d)=>{
		return d 
	})

}*/


let datos = [];


const cargarDatos = () => {
	d3.json('./datos.json')
		.then((data)=> {
			datos = data;
			console.log(datos);
			graficar()
		})

}

const graficar = () => {

	const w = 500;
	const h = 300;



	const svg = d3.select('body')
								.append('svg')
								.attr('width', w)
								.attr('height', h);

				svg.selectAll('rect')
						.data(datos)
						.enter()
						.append('rect')
						.attr('x',0)
						.attr('y',0)
						.attr('width', 20)
						.attr('height', 100)
						.attr('x',(d,i)=>{
							return i * 40 + 30
						})
						.attr('height',(d)=>{
							return d.dato;
						})
						.attr('y',(d)=>{
							return h - d.dato;
						})

				svg.selectAll('text')
						.data(datos)
						.enter()
						.append('text')
						.text((d)=>{
							return d.name;
						})
						.attr('x',(d,i)=>{
							return i * 40 + 40
						})	
						.attr('y',(d)=>{
							return h - d.dato - 3;
						})	
}