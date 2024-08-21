const patron = "!@#$%^&*()_)(*&$#@225+_(7653";

function cifrar(){
    let textoACifrar = document.getElementById('textoCifrar').value;
    
    let i=0,N=0;
    let ValorEntero = 0;
    let textoCifrado = "";
    
    
    let elementoResponse = document.getElementById('textoCifrado');
    
    for(i=0; i < textoACifrar.length; i++){
        N = i+1;
        ValorEntero = (textoACifrar.substring(i,N)).charCodeAt(0) + "2";
        textoCifrado += String.fromCharCode(ValorEntero);
    }
    alert(textoCifrado);
    
    elementoResponse.innerHTML = textoCifrado;
    elementoResponse.style.visibility = 'visible';
    
}

function descifrar(){
    let textoCifrado = document.getElementById('textoCifrar').value;
    alert(textoCifrado.value);
    let textoPlano = "";

    let elementoResponse = document.getElementById('textoCifrado');
    for(i=0; i < textoCifrado.length; i++){
        textoPlano += textoCifrado.charCodeAt(i)-10;
    }
    alert(textoPlano);
    elementoResponse.innerHTML = textoPlano;
    elementoResponse.style.visibility = 'visible';
}