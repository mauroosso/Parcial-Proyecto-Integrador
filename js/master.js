// -------------------------------------------------------
// -------------------------------------------------------
function getClonedArticleforTracks(el) {
    
    // defino la url para luego usarla en un <a>
    let url = "./detalles.html?category=track&id=" + el.id;

    // defino el html article que voy a mostrar
    let cln = `<article  class='panel'> <img src='${el.album.cover_big}' class='responsive' alt=''> <p class ="truncate">${el.title}</p> <div class='botones'> <a href='${url}'>Detalles</a></div></article>`;
    return cln;

}

// -------------------------------------------------------
// Muestra las canciones recibidas de parametro de tipo array (tracks)
// -------------------------------------------------------
function DisplayTracks(tracks) {
    let articleList = "";
    // capturo elemeto del dom (document object model)
    let columaTrack = document.getElementById("columnaTrack");

    // Recorro array, elemento por elemento
    // Uso el arrow function que es mas compacto
    tracks.forEach(element => {
        let article = getClonedArticleforTracks(element);
        // concateno la lista de articulos
        articleList += article;
    });
    // asigno la lista de articulos al elemeto del dom
    columaTrack.innerHTML = articleList;
}

// -------------------------------------------------------
// -------------------------------------------------------
function getClonedArticleforArtists(element) {
    let url = "./detalles.html?category=artist&id=" + element.id;
    let cln = `<article  class='panel'> <img src='${element.picture_big}' class='responsive' alt=''> <p class ="truncate"> ${element.name}</p> <div class='botones'> <a href='${url}'>Detalles</a></div></article>`;
    return cln;

}

// -------------------------------------------------------
// -------------------------------------------------------
function DisplayArtists(artist) {
    let articles = ""
    let columnaArtista = document.getElementById("columnaArtista")
    //console.log(artist);
    artist.forEach(element => {
        let article = getClonedArticleforArtists(element)
        articles += article
    })
    columnaArtista.innerHTML = articles;
}

// -------------------------------------------------------
// -------------------------------------------------------
function getClonedArticleforAlbums(element) {
    console.log(element);
    let url = "./detalles.html?category=album&id=" + element.id;
    let cln = `<article  class='panel'> <img src='${element.cover_big}' class='responsive' alt=''> <p class ="truncate">${element.title}</p> <div class='botones'> <a href="${url}">Detalles</a></div></article>`;
    return cln;

}

// -------------------------------------------------------
// -------------------------------------------------------
function DisplayAlbums(albums) {
    let articles = ""
    let columnaAlbum = document.getElementById("columnaAlbum")
    //console.log(albums);
    /* albums.forEach(element => {
        let article = getClonedArticleforAlbums(element)
        articles += article
    }) */
    for (let i = 0; i < albums.length; i++) {
        let element = albums[i];
        //console.log(element);
        let article = getClonedArticleforAlbums(element)
        articles += article
    }
    columnaAlbum.innerHTML = articles;
}


// -------------------------------------------------------
// Cuerpo principal
// Hago el fetch y llamo a las funciones para mostrar los elementos
// -------------------------------------------------------
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
    .then(chart => {
        console.log(chart, "chart");
        return chart.json()
    })
    .then(chartdata => {
        //console.log(chartdata);
        console.log(chartdata);

        DisplayTracks(chartdata.tracks.data)
        DisplayArtists(chartdata.artists.data)
        DisplayAlbums(chartdata.albums.data)
    })
    .catch(error => console.log(error));

console.log("Marca 2");



