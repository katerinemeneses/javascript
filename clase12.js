//¿Qué es una condicional en JavaScript?
//El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos.
// condicionales - la sentencia if (...) evalua la condicion en los parentensis, y si el resultado es true ejectua un bloque de codigo

if (year === 2022){
    console.log(`esto se muestra si la condicion se cumple`)
}

if (year < 2022) {
    console.log(`por poco`);
}
else if (year > 2022){
    console.log ( `te pasaste`);
}else {
    console.log(`exacto `);
}

let compraRealizada = false;

if (compraRealizada === true) {
  let subsidioAdicional = 10;
} else {
  let subsidioAdicional = 5;
}

//Operador ternario
//El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if//

//const error = 0 > 10 ? `todo esta correcto` : `hay un error`

//console.log(error) 
let puedePassar 
const edad = 18

//if (edad >= 18) {
   // puedePasar = true
    //} else {
    // puedePasar = false
// }

//console.log(puedePasar)
//const issend = false

//const btn = (isSend) ? `loading...` : `enviar`

//console.log(btn) enviar 

const edad = 17
const message = ( edad <3) ? `eres un bebe` :(edad <18) ? `eres muy joven` : (edad <100) ? `eres ya un adulto` :
`esa edad es inusual`

// console.log(message)
let x = true 
let y = false

//if (( x = y)) {
    //console.log (`true`)
//} else {
    //console.log(`false`)
// }

     
