
const expresion = "^[a-z]+$";
const version = 1;

function cifrar(){
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('titulo-mensaje');
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    
    let textoCifrado = "";

    if(document.getElementById('texto').value.length != 0){
        //Usuario ingreso algun texto se valida condicion de solo minusculas
        let reg = new RegExp(expresion);
        if(!texto.match(reg)){
            document.getElementById("parrafoAlert")
            alert("Solo letras minusculas y sin acentos");
            return;
        }
        let indice1=0,indice2=0;
        let ValorEntero=0, llave = 10;
        
        if(version == 1){
            textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        }
		else{
            for (indice1 = 0; indice1 < texto.length; indice1++){
                indice2=indice1+1;
                ValorEntero = (texto.substring(indice1,indice2)).charCodeAt(0) + llave;
                textoCifrado = textoCifrado + String.fromCharCode(ValorEntero);
            }
        }

        //document.getElementById('texto').value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent + "";
        document.getElementById('texto').value = "";
        imagen.src = "./encriptado.png";
        //texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        document.getElementById("textoModificado").innerHTML = textoCifrado;
        parrafo.textContent = "";
        imagen.src = "./resources/encriptado.png";
        //imagen.style.visibility = "hidden";
    }
    else{
        imagen.src = "./resources/sinEncriptar.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
    }
}

function descifrar(){
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('titulo-mensaje');
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    //alert(textoCifrado.value);
    let textoPlano = "";

    if(texto.length != 0){
        let indice1=0,indice2=0;
        let ValorEntero=0, llave = 10;
        
        if(version == 1){
            textoPlano = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        }
		else{
            for (indice1 = 0; indice1 < texto.length; indice1++){
                indice2=indice1+1;
                ValorEntero = (texto.substring(indice1,indice2)).charCodeAt(0) - llave;
                textoPlano = textoPlano + String.fromCharCode(ValorEntero);
            }
        }

        //document.getElementById("texto").value = textoPlano;
        tituloMensaje.textContent = "Texto desencriptado con Exito";
        document.getElementById("textoModificado").innerHTML = textoPlano;
        parrafo.textContent = "";
        document.getElementById('texto').value = "";
        imagen.src = "./resources/sinEncriptar.png";
        //imagen.style.visibility = "hidden";
    }
    else{
        imagen.src = "./resources/sinEncriptar.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
    }
}

function copiar(){
    navigator.clipboard.writeText(document.querySelector("#textoModificado").textContent)
    .then(() => {
    console.log('Contenido copiado al portapapeles: ' + document.querySelector("#textoModificado").textContent);
    /* Resuelto - texto copiado al portapapeles con éxito */
    },() => {
    console.error('Error al copiar');
    /* Rechazado - fallo al copiar el texto al portapapeles */
    });
}

function pegar(){
    document.getElementById('texto').focus;
    navigator.clipboard.readText()
    .then(text => {
        document.getElementById('texto').value =  text;
    })
    .catch(err => {
        console.error('Error al leer del portapapeles:', err)
    });
}