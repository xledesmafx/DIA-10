function obtenerValor(){
    var textoInput = document.getElementById("nroDoc").value;
    var tipoDocumento = document.getElementById("inputGroupSelect02").value;
    var formatoValido = /^\d{7}-\d$/;

    if(tipoDocumento == 'Registro Unico Del Contribuyente'){
        if (formatoValido.test(textoInput)) {
            alert("Guardado con exito!!!")
            document.getElementById("nroDoc").value = "";
        } else {
           alert("ERROR")
        }
    }else{
        alert("Guardado con exito!!!")
    }
}
    
