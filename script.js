function togglemode () {
    const html = document.documentElement
    html.classList.toggle("light")

// pegar a tag img
const img = document.querySelector("#profile img")

//substituir img
    if (html.classList.contains("light")) {
// se tiver light mode, adicionar a imagemm light        
    img.setAttribute("src", "./assets/avatarv-light.jpeg")
    } else {
// se tiver sem light mode manter imagem normal 
   
  img.setAttribute("src","./assets/avatar-viki.png")
}

}
