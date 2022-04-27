console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".


let titulo = document.getElementById("gen-1");

titulo.innerText = "Generasión 1 Pokimon";


//Cambia el color de fondo de la primera generación de Pokimon.


let gen1 = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg");

for (let i = 0; i < 1; i++){
        list = gen1[i];
        list.style.background='red';     //No hacía falta hacer esto, simplemente poniendo gen1[0] hubiera funcionado.
}

//Imprime por consola la URL de la página.

let url = document.URL;

console.log(url)

//Imprime por consola el dominio de la página.

let dominio = document.domain;

console.log(dominio);


// Imprime todos los nodos de imagen.

let nodos = document.getElementsByTagName('img');

console.log(nodos)




// Sustituye el atributo "src" de todas las imágenes por este

let imagenCambio = document.getElementsByTagName('img');

for (cambio of imagenCambio){
    cambio.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
} 

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let voladores= document.querySelectorAll('.itype.flying');

for (texto of voladores){
    texto.parentNode.parentNode.style.background = 'yellow';
}




// console.log(voladores);
