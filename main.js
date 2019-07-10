const datos = [1,2,3,5,8,13,21,34,55,89,144];

const x = d3.scaleLinear()
						.domain([0, d3.max(datos)])
						.range([0, 500])


function graficar(){
	d3.select('.barras')
		.selectAll('div')
		.data(datos) 
		.enter().append('div')
		.style('width', function(d){
			return x(d) + 'px'
		})
}