document.addEventListener('DOMContentLoaded', () =>{
	mostrarJuegos(juegos);
	buscarJuegos()
});

let resultado = document.getElementById("resultado"),
	search = document.getElementById("search");

function mostrarJuegos(juegos){
	juegos.forEach(juego => {
		const elements = document.createElement("P");
		elements.innerHTML = `Nombre: <strong>${juego.nombre}</strong> - Genero: <strong>${juego.genero}</strong> - Año: <strong>${juego.year}</strong> - Empresa: <strong>${juego.empresa}</strong>`;
		resultado.appendChild(elements)
	})
}

function buscarJuegos() {
	
	search.addEventListener("input", e => {
		limpiarHTML()
		const inpuText = e.target.value.toUpperCase().trim();

		const mostrarFiltrado = juegos.filter (juego => 
		juego.nombre.toUpperCase().startsWith(inpuText) ||
		juego.year.toString().startsWith(inpuText) ||	
		juego.genero.toUpperCase().startsWith(inpuText)
		);

		if(mostrarFiltrado.length) {
			mostrarJuegos(mostrarFiltrado)
		} else{
			noResultado()
		}
		
		})
}

function limpiarHTML() {
	while (resultado.firstChild) {
		resultado.removeChild(resultado.firstChild)
	}
}

function noResultado (){
	const noResultado = document.createElement("DIV")
	noResultado.textContent = "No se encontraron resultados";
	resultado.appendChild(noResultado)
}

//Trabajo para mañana : hacer en el nav un link que lleve a buscador de juegos. mejorar la estetica de
// la pagina y yo creo que con eso vamos a andar. fijarse bien el tema de los links porque este
// es un borrador.