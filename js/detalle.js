//Tomar los parametros directamente de los queryparameter 
// query= ? URL?....
// los parametros son categoria y id

let urlParams = new URLSearchParams(window.location.search);

let category = urlParams.get('category');
let id = urlParams.get('id');

//console.log(category, "category");
//console.log(id, "id");

//Armo la URL para el fetch e fucion de la categoria y el id
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";
url = url + category + "/" + id;


// tomo elemetos del DOM
let image = document.getElementById("detailImage");
let nombre = document.getElementById("detailName");
let info = document.getElementById("detailinfo");
let titulo = document.getElementById("titulo_detalle");
let iframe = document.getElementById("iframe");

titulo.innerHTML = "Detalle del " + category.charAt(0).toUpperCase() + category.slice(1)


 //-------------albums---------------

if (category == "album") {

    fetch(url)
        .then(album => {

            return album.json()
        }).then(response => {

            console.log(response);
            // coloco el atributo src a la imagen
            image.setAttribute("src", response.cover_big);
            nombre.innerHTML = response.title
            info.innerHTML = `<li> Ratig del album: ${response.rating} </li>`
            info.innerHTML += `<li> Fans del album: ${response.fans} </li>`
            info.innerHTML += `<li> Fecha de lazamiento: ${response.release_date} </li>`
            info.innerHTML += `<li> Duracion del album: ${response.duration} </li>`
            

        }).catch(error => console.log(error));

 //----------------track-----------------------
} else if (category === "track") {
   
    fetch(url)
        .then(track => {
       
            return track.json()
        }).then(response => {
            //console.log( trackData,"albumdata"); 
            console.log(response, "track");

            //image.setAttribute("src", response.album.cover_big);
            iframe.setAttribute("src",`https://widget.deezer.com/widget/dark/track/${response.id}?tracklist=false`)
            nombre.innerHTML = response.title
            info.innerHTML = `<li> Ranking: ${response.rank} </li>`
            info.innerHTML += `<li> Nombre artista: ${response.artist.name} </li>`
            info.innerHTML += `<li> Duracion  ${response.duration} segundos</li>`
            info.innerHTML += `<li> Fecha de lanzamiento ${response.album.release_date} </li>`

        }).catch(error => console.log(error));

} else  {
    // -------------artists-------------

    fetch(url)
        .then(artist => {
            console.log(artist, "artist");
            return artist.json()
        }).then(response => {
            console.log(response,"response"); 

            image.setAttribute("src", response.picture_big);
            nombre.innerHTML = response.name
            info.innerHTML = `<li> Fans: ${response.nb_fan} </li>`
            info.innerHTML += `<li> Numero de albums: ${response.nb_album} </li>`

        }).catch(error => console.log(error));


}
//Trabjando con el localStorage
//1.- Capturar el elemento
let agregarEliminar = document.getElementById('agregarEliminar');

//2.- Crear un objeto literal 
let favoritos = { "track":[], "album":[], "artist":[] }

//3.- Traer los datos del localStorage
let traerFavoritos = localStorage.getItem('Favoritos');

//console.log(traerFotos);
if(traerFavoritos != null){
    favoritos = JSON.parse(traerFavoritos);   
}

console.log(favoritos, "favoritos");

//4.- Verificar si el ( id ) esta o no en el array - Condición
if(favoritos[category].includes(id)){
    agregarEliminar.innerHTML = 'Eliminar de favoritos';      
}

//5.- Controlar el evento sobre el elemento capturado
agregarEliminar.addEventListener('click', function(e){
    e.preventDefault();
    //Debo programar agregar el id al array de favortitos para finalmente colocarlo dentro del localStorage
    if(favoritos[category].includes(id)){
        // si esta lo quito con un slice
        console.log("eliminar",id);
        let posicionFavoritos = favoritos[category].indexOf(id);
        favoritos[category].splice(posicionFavoritos,1);
        agregarEliminar.innerHTML = 'Agregar a Favoritos';
    }else{
        // si no esta en favoritos de la categoria lo agrego con un .push
        favoritos[category].push(id);
        console.log("agregar",id);
        agregarEliminar.innerHTML = 'Eliminar de Favoritos'
    }
    //cargar los datos al localStorage
    let cadenaTextofavoritos = JSON.stringify(favoritos);
    localStorage.setItem('Favoritos',cadenaTextofavoritos)
    
})
/*
// Haciendo boton clear storage
//1 capturar elemento

let botonClear = document.getElementById("EliminarTodo")

//preveniendo la function de default de un ancla
botonClear.addEventListener("click",function(e){
    e.preventDefault();

    if(favoritos != 0){
        alert("Seguro que quieres Eliminar la lista de favoritos, No se puede recuperar.")
    }
})
let favoritos = sessionStorage.clear("favoritos")*/