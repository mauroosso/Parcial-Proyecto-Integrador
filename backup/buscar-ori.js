//capturo elemento
/*
let busqueda = document.querySelector(".busqueda")

//lo que el usuario mando a buscar c almacena en esa variable
// let palabraBuscar = location.search;
// console.log(palabraBuscar + "esta es la plabra que buscaste");

//
let urlParams = new URLSearchParams(window.location.search);
let buscar = urlParams.get('buscar');

let resultados = document.querySelector(".resultados")
busqueda.innerHTML = buscar
//el parametro o variable que quiero buscar

//buscador = name del input por que atraves del name viajan los datos / el metodo get te atrapa /trasladar datos de html a html por el metodo get o post //viaja por la url
//busqueda.innerHTML = objetoBuscar.get("buscador")

respuestaOK = []

if(!buscar){
    alert("busqueda vacia")
}else{

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
    .then(chart => {
        //console.log(chart, "chart");
        return chart.json()
    })
    .then(chartdata => {
        // console.log(chartdata, "chartdata");
        let tracks = chartdata.tracks.data

        for (let i = 0; i < tracks.length; i++) {
            // console.log(tracks[i]);
            let titulo = tracks[i].title 
            if (titulo.toLowerCase().includes(buscar.toLowerCase())) {
                console.log(titulo);
                console.log(buscar);
                respuestaOK.push(tracks[i])
            }
        }
        console.log(respuestaOK);
        if(respuestaOK.length > 0){
            //con resultados
            for(let i = 0; i<respuestaOK.length; i++ ){
                resultados.innerHTML += "<li>"+respuestaOK[i].title+"</li>"
            }           
        }else{//sin resultados
        }
    })
    .catch(error => console.log(error));
}

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
    .then(chart => {
        //console.log(chart, "chart");
        return chart.json()
    })
    .then(chartdata => {
        // console.log(chartdata, "chartdata");
        let album = chartdata.album.data

        for (let i = 0; i < album.length; i++) {
            // console.log(tracks[i]);
            let titulo = album[i].title 
            if (titulo.toLowerCase().includes(buscar.toLowerCase())) {
               
                respuestaOK.push(album[i])
            }
        }
        console.log(respuestaOK);
        if(respuestaOK.length > 0){
            //con resultados
            for(let i = 0; i<respuestaOK.length; i++ ){
                resultados.innerHTML += "<li>"+respuestaOK[i].title+"</li>"
            }           
        }else{//sin resultados
        }
    })
    .catch(error => console.log(error));
}
*/