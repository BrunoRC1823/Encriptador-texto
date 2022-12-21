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
//capturamos el p del texto encriptado
var textoEncriptar = document.getElementById("Texto");
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
    advetencia.style.top = "32.5em";
    error.style.fontSize = "1em";
    error.style.fontWeight = "0";
}
//funcion para dar formato y animación al 
//p donde se muestra el formato que se debe ingresar
//en caso haya sea invalido el texto ingresado
function invalido() {
    error.style.color = '#e42630';
    error.style.rotate = "360deg";
    advetencia.style.top = "32.5em";
    error.style.fontSize = "1.5em";
    error.style.fontWeight = "400";
}
//funcion para dar formato al texto 
//del p donde se muestra el codigo encriptado
function textoError() {
    let texto = document.getElementById("Texto").value;
    //Si es vacío muestra el mensaje
    if (!texto) {
        fraseCodi.value = "Debe ingresar al menos un caracter!";
        fraseCodi.style.color = "#e42630";
        fraseCodi.style.fontSize = "1.4em";
        textoEncriptar.focus();
    } else {
        //Sino es vacío muestra el mensaje
        fraseCodi.value = "Error!";
        fraseCodi.style.color = "#e42630";
        fraseCodi.style.fontSize = "1.4em";
        textoEncriptar.focus();
    }
    return fraseCodi
}
// La siguiente función valida el elemento textArea #Texto
function validar(inputValidar) {
    // Variable que usaremos para determinar si el #Texto es valido
    let isValid = false;
    // El input que queremos validar
    let texto = inputValidar.value;
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
    let texto = textoEncriptar.value;
    //ajustamos los botones
    ajustar();
    //llamamos al validar()
    const valido = validar(textoEncriptar);
    //Si validar() = false muestra el mensaje de error
    if (!valido) {
        textoError();
    } else {
        //creamos un arreglo para almacenar el #Texto
        let textoEncriptado = [];
        //Si el #Texto contiene datos 
        if (texto.length) {
            //regresa el color inicial
            fraseCodi.style.color = "#495057";
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
                //enviamos el array al fraseCodi como un String
                fraseCodi.value = textoEncriptado.join("");
            }
        }
    }
    //borramos el texto del textArea
    textoEncriptar.value = "";
}
//funcion para desencriptar el texto del fraseCodi
function mostrarDesencriptar() {
    //capturamos el valor del fraseCodi
    let textoEncrip = fraseCodi.value;
    //ajustamos los botones
    ajustar();
    //llamamos al validar()
    const valido = validar(fraseCodi);
    //Si validar() = false muestra el mensaje de error
    if (!valido) {
        textoError();
    } else {
        //creamos un arreglo para almacenar el #Texto
        let textoEncriptado = [];
        //Si el #Texto contiene datos 
        if (textoEncrip.length) {
            //regresa el color inicial
            fraseCodi.style.color = "#495057";
            //reemplazamos según la cadena encontrada. 
            let textoDesEncrip = textoEncrip.replace(/enter/gi, "e").replace(/imes/gi, "i")
                .replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
            //enviamos el string desencriptado al fraseCodi
            fraseCodi.value = textoDesEncrip;
        }
    }
}
//funcion para copiar el texto
function copiarTexto() {
    debugger;
    //removemos todos las posibles selecciones de la pagina
    window.getSelection().removeAllRanges();
    //seleccionamos la frase codificada
    fraseCodi.select();
    //ejecutamos el comando para copiar un texto
    var res = document.execCommand('copy');
    //si res == true (document.execCommand('copy') regresa un boolean) 
    //se aplica el cambio de estilos, si es false es porque el comando
    //falló
    if (res) {
        copiar.style.borderColor = '#28b423';
        copiar.style.boxShadow = '3px 3px 3px  #088c19';
        copiar.style.transform = 'scale(0.95)';
        alert("Texto copiado");
    }
}
//funcion para regresar la funcion a su formato inicial
function resetFraseCodi() {
    fraseCodi.value = ""
    fraseCodi.style.color = "#495057";
}
//capturamos el evento onclick para mostrar la funcion
//mostrarEncriptado() cuando se haga click
encriptar.onclick = mostrarEncriptado;
//capturamos el evento onclick para mostrar la funcion
//mostrarDesencriptado() cuando se haga click
desencriptar.onclick = mostrarDesencriptar;
//capturamos el evento onclick para mostrar la funcion
fraseCodi.onclick = resetFraseCodi;
//copiarTexto() cuando se haga click
copiar.onclick = copiarTexto;