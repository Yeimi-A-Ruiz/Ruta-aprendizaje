let free = false;

const validarCliente = (time) =>{
    let edad = prompt(`Digite su edad, recuerde son las ${time}:00 horas`);
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Tienes permitido el paso, adicional por ser la primer persona tu entrada es gratis");
            free = true;            
        } else {
            alert("Tienes permitido el paso, pero debes de pagar la entrada");            
        }
    } else {
        alert("Eres menor de edad, no tienes permitido el ingreso");        
    }
}

validarCliente(23)
validarCliente(24)
validarCliente(0.6)
validarCliente(1)
validarCliente(2)
validarCliente(2.4)
validarCliente(3)
validarCliente(6)