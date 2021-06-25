//Pasos para mostrar la listaTracks de mis fotos favoritas

//1.-Traer los datos del localStorage (localStorage.getItem())
let misFavoritos = localStorage.getItem('Favoritos');

//2.- Transformar en un array
let arrayFavoritos = JSON.parse(misFavoritos);

//3.- Capturar el elemento <ul class=listaTracksFotos> donde se pretende mostrar las mismas

let listaTracks = document.querySelector('#columnaTrack');
let listaAlbum = document.querySelector("#columnaAlbum")
let listaArtists = document.querySelector("#columnaArtista")

//4.- Determinar si hay o no alguna foto en favoritas - if(arrayFavoritas === null)

if (arrayFavoritos.length == 0){
    listaTracks.innerHTML = `<li>No se ha agregado nada </li>`
    alert('La playlist esta vacia')
}
console.log(arrayFavoritos);



//--------------------Tracks----------------------

let arrayFavoritosTracks = arrayFavoritos["track"];
//console.log(arrayFavoritosTracks, "arrayFavoritosTracks");

if (arrayFavoritosTracks.length != 0) {
    //console.log("aca");
    //6.- Caso contrario - Recorrer el array - for(let i = 0; i < arrayFavoritas.length; i++)  
    for (let i = 0; i < arrayFavoritosTracks.length; i++) {
        let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + arrayFavoritosTracks[i] 


        fetch(url)
            .then(Track => {

                return Track.json()
            }).then(response => {
                console.log(response, "response");
                
                //detalles.html?category=track&id=1197901592

                let url = "./detalles.html?category=track&id=" + arrayFavoritosTracks[i]
                let cln = `<article  class='panel'> <img src='${response.album.cover_medium}' class='responsive' alt=''> <p class ="truncate"> ${response.title}</p> <div class='botones'> <a href='${url}'>Detalles</a></div></article>`;
                            
                listaTracks.innerHTML += cln
                
            }).catch(error => console.log(error));
    }
}

//--------------------Albums----------------------

let arrayFavoritosAlbums = arrayFavoritos["album"];

if (arrayFavoritosAlbums.length != 0) {
    console.log("aca");
    //6.- Caso contrario - Recorrer el array - for(let i = 0; i < arrayFavoritas.length; i++)  
    for (let i = 0; i < arrayFavoritosAlbums.length; i++) {
        let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + arrayFavoritosAlbums[i] 


        fetch(url)
            .then(album => {

                return album.json()
            }).then(response => {
                console.log(response, "response");
                
                //detalles.html?category=track&id=1197901592
                let url = "./detalles.html?category=album&id=" + arrayFavoritosAlbums[i]
                let cln = `<article  class='panel'> <img src='${response.cover_medium}' class='responsive' alt=''> <p class ="truncate"> ${response.title}</p> <div class='botones'> <a href='${url}'>Detalles</a></div></article>`;
                            
                listaAlbum.innerHTML += cln
                
                
            }).catch(error => console.log(error));
    }
}

//--------------------Artists----------------------

let arrayFavoritosArtists = arrayFavoritos["artist"];

if (arrayFavoritosArtists.length != 0) {
    console.log("aca");
    //6.- Caso contrario - Recorrer el array - for(let i = 0; i < arrayFavoritas.length; i++)  
    for (let i = 0; i < arrayFavoritosArtists.length; i++) {
        let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + arrayFavoritosArtists[i] 


        fetch(url)
            .then(artist => {

                return artist.json()
            }).then(response => {
                console.log(response, "response");
                
                //detalles.html?category=track&id=1197901592
                let url = "./detalles.html?category=artist&id=" + arrayFavoritosArtists[i]
                let cln = `<article  class='panel'> <img src='${response.picture_medium}' class='responsive' alt=''> <p class ="truncate"> ${response.name}</p> <div class='botones'> <a href='${url}'>Detalles</a></div></article>`;
                            
                listaArtists.innerHTML += cln
                
                
            }).catch(error => console.log(error));
    }
}






