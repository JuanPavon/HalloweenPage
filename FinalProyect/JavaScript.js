function mostrar(elemento) { 
    document.getElementById (elemento).style.visibility="visible";
}
function ocultar(elemento) { 
    document.getElementById (elemento).style.visibility="hidden";
}
function sonar(elemento) {
    var audio = document.getElementById(elemento);
    audio.play();
}
function pausar(elemento) {
    var audio = document.getElementById(elemento);
    audio.pause();
}