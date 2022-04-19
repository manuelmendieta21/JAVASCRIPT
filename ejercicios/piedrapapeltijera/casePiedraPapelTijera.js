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
    case 'tijera':
        console.log('')
        break;
    default:
        console.log('no soy ninguna de las opciones')
        break;    

}
}




let random = Math.floor((Math.random() * 3) );
variable[random];
console.log(`La computadora a seleccionado :${variable[random]}`);
piedrapapelotijera();