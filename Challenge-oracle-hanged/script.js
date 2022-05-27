<<<<<<< HEAD
String.prototype.replaceAt= function (index,caracter) { return this.substr(0, index) + caracter + this.substr(index+caracter.length);}
var contadorFallos = 0;
var errores = "";
var texto = document.getElementById("texto");
var texto2 = document.getElementById("texto2");
var imagen1 = document.getElementById("imagen1");
var textArea = document.getElementById("textArea");
var botonGuardar = document.getElementById("guardar");
var botonReiniciar = document.getElementById("reiniciar")
var poolpalabras = ["alura", "ahorcado", "oracle"];
const palabraAleatoria = poolpalabras[Math.floor(Math.random()*poolpalabras.length)];
var palabraConGuiones = palabraAleatoria.replace(/./g, "_ ");
texto.innerText = palabraConGuiones;
texto2.innerText = errores;
botonGuardar.onclick = guardar;
botonReiniciar.onclick = reiniciar;

function guardar() {
    poolpalabras.push(textArea.innerText);    
}

function reiniciar() {
    document.defaultView;
}

document.addEventListener('keydown',(event)=>{ 

    let fallo = true;

    for (const i in palabraAleatoria) {

        if (event.key==palabraAleatoria[i]) {

            palabraConGuiones = palabraConGuiones.replaceAt(i*2, event.key);
            fallo = false;

        }

    }

    if (fallo && contadorFallos <=5) {
        contadorFallos++
        imagen1.style.backgroundPosition = -(295.5*contadorFallos) + "px 0";
        errores += event.key + " "              
        texto2.innerText = errores;
        document.removeEventListener('keydown')
    } else if (palabraConGuiones.indexOf("_")<0) {

        texto.innerText = "Felicidades la palabra era " + palabraAleatoria;

        document.removeEventListener('keydown')
    }    
    texto.innerText = palabraConGuiones;
    
    /* event.preventDefault(); */

=======
String.prototype.replaceAt= function (index,caracter) { return this.substr(0, index) + caracter + this.substr(index+caracter.length);}
var contadorFallos = 0;
var errores = "";
var texto = document.getElementById("texto");
var texto2 = document.getElementById("texto2");
var imagen1 = document.getElementById("imagen1");
var textArea = document.getElementById("textArea");
var botonGuardar = document.getElementById("guardar");
var botonReiniciar = document.getElementById("reiniciar")
var poolpalabras = ["alura", "ahorcado", "oracle"];
const palabraAleatoria = poolpalabras[Math.floor(Math.random()*poolpalabras.length)];
var palabraConGuiones = palabraAleatoria.replace(/./g, "_ ");
texto.innerText = palabraConGuiones;
texto2.innerText = errores;
botonGuardar.onclick = guardar;
botonReiniciar.onclick = reiniciar;

function guardar() {
    poolpalabras.push(textArea.innerText);    
}

function reiniciar() {
    document.defaultView;
}

document.addEventListener('keydown',(event)=>{ 

    let fallo = true;

    for (const i in palabraAleatoria) {

        if (event.key==palabraAleatoria[i]) {

            palabraConGuiones = palabraConGuiones.replaceAt(i*2, event.key);
            fallo = false;

        }

    }

    if (fallo && contadorFallos <=5) {
        contadorFallos++
        imagen1.style.backgroundPosition = -(295.5*contadorFallos) + "px 0";
        errores += event.key + " "              
        texto2.innerText = errores;
        document.removeEventListener('keydown')
    } else if (palabraConGuiones.indexOf("_")<0) {

        texto.innerText = "Felicidades la palabra era " + palabraAleatoria;

        document.removeEventListener('keydown')
    }    
    texto.innerText = palabraConGuiones;
    
    /* event.preventDefault(); */

>>>>>>> 7805dc4f3cfdb73a132d8f8ae9877bcbba6d7538
});