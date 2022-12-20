//capturamos el btn encriptar
var encriptar = document.querySelector(".encriptar");
//capturamos el btn desencriptar
var desencriptar = document.querySelector(".desencriptar");
//capturamos el p donde se muestra la frase encriptada
var frase = document.querySelector(".frase-codificada");
//capturamos el btn copiar
var copiar = document.querySelector(".copiar");
//capturamos la img del muñeco
var muneco = document.querySelector(".muneco");
//capturamos el div donde se muestra la frase encriptada
var descr = document.querySelector(".descr-area");
//capturamos el div donde se muestra el formato que se debe ingresar
var advetencia = document.querySelector(".div-advetencia");
//capturamos el p donde se muestra el formato que se debe ingresar
var error = document.getElementById('iderror');
//capturamos el div de los botones
var botones = document.querySelector(".div-botones");
//capturamos el div donde se muestra el texto encriptado y el btn copiar
var area = document.querySelector(".text-area");
//capturamos el p del texto encriptado
var fraseCodi = document.getElementById("fraseCodi");
//funcion para mostrar el btn copiar, el p del texto encriptado
//y ajustar la posición de los botones
function ajustar() {
    frase.style.display = "flex";
    copiar.style.display = "flex";
    muneco.style.display = "none";
    descr.style.display = "none";
    advetencia.style.top = "33em";
    botones.style.top = "35em";
    area.style.height = "600px";
    copiar.style.top = "38em";
}
//funcion para dar formato y animación al 
//p donde se muestra el formato que se debe ingresar
//en caso haya sea valido el texto ingresado
function valido() {
    error.style.color = '#28b423'
    error.style.rotate = "-360deg";
    advetencia.style.top = "33em";
    error.style.fontSize = "1em";
    error.style.fontWeight = "0";
}
//funcion para dar formato y animación al 
//p donde se muestra el formato que se debe ingresar
//en caso haya sea invalido el texto ingresado
function invalido() {
    error.style.color = '#e42630';
    error.style.rotate = "360deg";
    advetencia.style.top = "32em";
    error.style.fontSize = "1.7em";
    error.style.fontWeight = "400";
}
//funcion para dar formato al texto 
//del p donde se muestra el codigo encriptado
function textoError() {
    let texto = document.getElementById("Texto").value;
    //Si es vacío muestra el mensaje
    if (!texto) {
        fraseCodi.innerHTML = "Debe ingresar al menos un caracter!";
        fraseCodi.style.color = "#e42630";
        fraseCodi.style.fontSize = "1.5em";
    } else {
        //Sino es vacío muestra el mensaje
        fraseCodi.innerHTML = "Error!";
        fraseCodi.style.color = "#e42630";
        fraseCodi.style.fontSize = "1.5em";
    }
    return fraseCodi
}
// La siguiente función valida el elemento textArea #Texto
function validar() {
    // Variable que usaremos para determinar si el #Texto es valido
    let isValid = false;
    // El input que queremos validar
    let texto = document.getElementById("Texto").value;
    // El pattern que vamos a comprobar
    const pattern = new RegExp("^[a-z\\s\\n\\ñ]+$");
    // Primera validación, si #Texto esta vacío entonces no es valido
    if (!texto) {
        isValid = false;
    } else {
        // Segunda validación, si #Texto contiene caracteres diferentes a los permitidos
        if (!pattern.test(texto)) {
            isValid = false;
        } else {
            // Si pasamos todas la validaciones anteriores, entonces el #Texto es valido
            isValid = true;
        }
    }
    //Ahora llamamos al las funciones para darle formato y animaciones al 
    //p donde se muestra el formato que se debe ingresar
    if (!isValid) {
        invalido();
    } else {
        valido();
    }
    // devolvemos el valor de isValid
    return isValid;
}
function mostrarEncriptado() {
    //capturamos el valor del textArea #Texto
    let texto = document.getElementById("Texto").value;
    //ajustamos los botones
    ajustar();
    //llamamos al validar()
    const valido = validar();
    //Si validar() = false muestra el mensaje de error
    if (!valido) {
        textoError();
    } else {
        //creamos un arreglo para almacenar el #Texto
        let textoEncriptado = [];
        //Si el #Texto contiene datos 
        if (texto.length) {
            for (let i = 0; i < texto.length; i++) {
                //creamos una variable para almacenar el codigo
                let codigo;
                //si coinciden se reemplaza según el caso
                if (texto.charAt(i) == "a") {
                    codigo = texto.charAt(i).replace(/a/g, 'ai');
                }
                else if (texto.charAt(i) == "e") {
                    codigo = texto.charAt(i).replace(/e/g, 'enter');
                }
                else if (texto.charAt(i) == "i") {
                    codigo = texto.charAt(i).replace(/i/g, 'imes');
                }
                else if (texto.charAt(i) == "o") {
                    codigo = texto.charAt(i).replace(/o/g, 'ober');
                }
                else if (texto.charAt(i) == "u") {
                    codigo = texto.charAt(i).replace(/u/g, 'ufat');
                } else {
                    //sino se deja igual
                    codigo = texto.charAt(i);
                }
                //enviamos los caracteres al arreglo
                textoEncriptado.push(codigo)
                //le damos color texto encriptado
                fraseCodi.style.color = "#495057";
                //enviamos el array al fraseCodi como un String
                fraseCodi.innerHTML = textoEncriptado.join("");
            }
        }
    }
    //borramos el texto del textArea
    document.getElementById("Texto").value = "";
}
//funcion para desencriptar el texto del fraseCodi
function mostrarDesencriptar() {
    //capturamos el valor del fraseCodi
    let textoEncrip = document.getElementById("fraseCodi").innerHTML;
    //reemplazamos según la cadena encontrada. 
    let textoDesEncrip = textoEncrip.replace(/enter/gi, "e").replace(/imes/gi, "i")
    .replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    //enviamos el string desencriptado al fraseCodi
    document.getElementById("fraseCodi").innerHTML = textoDesEncrip;
}
//funcion para copiar el texto
function copiarTexto() {
    //capturamos el fraseCodi
    let texto = document.getElementById("fraseCodi");
    //creamos un rango de selección
    var seleccion = document.createRange();
    //Se añade el texto a la selección el elemento
    seleccion.selectNodeContents(texto);
    //Se deselecciona cualquier cosa que estuviese 
    //previamente seleccionada en la página
    window.getSelection().removeAllRanges();
    //Se realiza la selección del contenido
    window.getSelection().addRange(seleccion);
    //Se lanza el comando de copiado
    var res = document.execCommand('copy');
}
//capturamos el evento onclick para mostrar la funcion
//mostrarEncriptado() cuando se haga click
encriptar.onclick = mostrarEncriptado;
//capturamos el evento onclick para mostrar la funcion
//mostrarDesencriptado() cuando se haga click
desencriptar.onclick = mostrarDesencriptar;
//capturamos el evento onclick para mostrar la funcion
//copiarTexto() cuando se haga click
copiar.onclick = copiarTexto;