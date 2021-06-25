//
let busqueda = new URLSearchParams(location.search)
// buscar = name del form
let buscar = busqueda.get('buscar')

//Capturo elemetos del DOM
let resultados = document.querySelector('.resultado')
let titulo = document.querySelector('.titulo')
//console.log(resultados);
let contenido = ''


titulo.innerHTML = "Resultados de tu Busqueda... "+ buscar.charAt(0).toUpperCase() + buscar.slice(1)


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
   .then(respuesta => {
      return respuesta.json()
   })
   .then(dataBusqueda => {
      console.log(dataBusqueda);
      for (let i = 0; i < dataBusqueda.data.length; i++) {
         
         contenido += `<p class="nombre"> <a href="detalles.html?category=track&id=${dataBusqueda.data[i].id}" ><img src="${dataBusqueda.data[i].album.cover_small}"></img> 
         <span>${dataBusqueda.data[i].title} </span></a></p> `

      }
      resultados.innerHTML = contenido
      console.log(contenido,"cotenido");

      if (dataBusqueda.data.length == 0) {
         alert('La busqueda no trajo resultados')
      }
   })
   .catch(error => {
      console.log(error);
   })
