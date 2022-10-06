let variable =['piedra','papel','tijera'];

function piedrapapelotijera(){
    let ingresado =prompt('Selecciona el case: piedra, papel, tijera ')
    

switch(true){
    case (ingresado === variable[random]):
        console.log('empatados');
        break;
    case (ingresado ==='papel' && variable[random]==='piedra' ):    
        console.log('Gana  PAPEL  sobre  PIEDRA');
        break;
    case (ingresado ==='papel' && variable[random]==='tijera'):
        console.log('Pierdes Papel sobre Tijera')
        break;
    case (ingresado ==='piedra' && variable[random]==='tijera'):
        console.log('Gana Piedra sobre Tijera')
        break;
    case (ingresado==='piedra' && variable[random]==='papel'):
        console.log('Pierdes PIEDRA sobre PAPEL')
        break;
    case (ingresado==='tijera'&& variable[random]==='papel'):
        console.log('Gana TIJERA sobre PAPEL')
        break;
    case (ingresado==='tijera' && variable[random]==='piedra'):
        console.log('Pierdes TIJERA sobre PIEDRA')
        break;
    default:
        console.log('no se ingreso ninguna de las opciones')
        break;
}
}

let random = Math.floor((Math.random() * 3) );
variable[random];
console.log(`La computadora a seleccionado :${variable[random]}`);
//piedrapapelotijera();