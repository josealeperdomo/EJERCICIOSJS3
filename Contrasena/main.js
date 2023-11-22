/*
2)* Crea una expresión regular para validar una contraseña:
  a) Que tenga mínimo 7 caracteres.
  b) Al menos 1 mayúscula.
  c) Al menos 1 numero.
  d) Al menos 1 carácter especial. 
*/
let ver = document.getElementById('ver')
let clave = document.getElementById('clave')
let regex = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/

function enviar(){
    ver.value = clave.value
    if(regex.test(clave.value)){
        alert('su contraseña es valida')
    }else{
        alert('Su contraseña no es valida')
    }
}


