function Persona(nom,ed){
    nombre=nom;
    edad=ed;
}

Persona.prototype.saludo = ()=>{
    console.log(`Hola, soy ${nombre}`);
}


function Empleado(sueldo){
    sueldo.sueldo;
}

Empleado.prototype = Object.create(Persona.prototype);


//CREO QUE ESTO FUNCIONA