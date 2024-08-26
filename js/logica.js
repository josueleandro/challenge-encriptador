const expresion = "^[a-z]+$";

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
        
		for (indice1 = 0; indice1 < texto.length; indice1++){
		    indice2=indice1+1;
            ValorEntero = (texto.substring(indice1,indice2)).charCodeAt(0) + llave;
            textoCifrado = textoCifrado + String.fromCharCode(ValorEntero);
        }

        document.getElementById('texto').value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent + "";
        imagen.src = "./encriptado.png";
        texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./resources/encriptado.png"
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
        
		for (indice1 = 0; indice1 < texto.length; indice1++){
		    indice2=indice1+1;
            ValorEntero = (texto.substring(indice1,indice2)).charCodeAt(0) - llave;
            textoPlano = textoPlano + String.fromCharCode(ValorEntero);
        }

        document.getElementById("texto").value = textoPlano;
        tituloMensaje.textContent = "Texto desencriptado con Exito";
        parrafo.textContent = "";
        imagen.src = "./resources/sinEncriptar.png";
    }
    else{
        imagen.src = "./resources/sinEncriptar.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
    }
}