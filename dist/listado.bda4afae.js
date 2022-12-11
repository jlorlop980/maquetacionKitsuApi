function cambio() {
    if (document.getElementById("sld").checked) changeManga();
    else changeAnime();
}
function changeAnime() {
    document.getElementById("A").className = "desactivado";
    document.getElementById("M").className = "activado";
    document.getElementById("RA").className = "activado";
    document.getElementById("RM").className = "desactivado";
    let anime = document.getElementById("anime").className = "main-mobile-section-anime activado";
    let manga = document.getElementById("manga").className = "desactivado";
}
function changeManga() {
    document.getElementById("A").className = "activado";
    document.getElementById("M").className = "desactivado";
    document.getElementById("RA").className = "desactivado";
    document.getElementById("RM").className = "sactivado";
    let anime = document.getElementById("anime").className = "desactivado";
    let manga = document.getElementById("manga").className = "main-mobile-section-anime activado";
}

//# sourceMappingURL=listado.bda4afae.js.map
