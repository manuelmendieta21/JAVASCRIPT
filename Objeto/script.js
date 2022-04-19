// var miAuto ={
//     marca:"toyota",
//     modelo:"fortuner",
//     annio:2020,
//     detalleDelAuto:function(){
//         console.log('Auto ${this.marca} ${this.modelo} ${this.annio}');
//     }

// };
// console.log(miAuto.detalleDelAuto)

//Defino las variables

let variable =['piedra','papel','tijera'];
// function validarcampo(ingresado){
//     while(true){
//         let ingresado =prompt('Selecciona: 1-Piedra, 2-Papel, 3-Tijera ')
//         if(ingresado ===null || ingresado==""){
//              alert('Selecciona una de los items');
//         }
//         else{
//         return ingresado;
//         }
//     }
// }

function piedrapapelotijera(){
    let ingresado =prompt('Selecciona: piedra, papel, tijera ')
    
    if(variable[random]===ingresado){
        console.log(`Empatados, Seleccionaste ${ingresado}y la computadora seleccionon${variable[random]}`)
    }
    else{
        if(variable[random]==='tijera' && ingresado==='papel'){
            console.log(`seleccionaste ${ingresado} pierdes contra ${variable[random]}`);
        }
        else {
            if(variable[random]==='tijera' && ingresado==='piedra'){
                console.log(`seleccionaste ${ingresado} Ganas contra ${variable[random]}`);
            }
            else {
                if(variable[random]==='piedra' && ingresado==='tijera')
                {
                    console.log(`Seleccionaste ${ingresado} Pierdes contra ${variable[random]}`)
                }
            }    
        }
        console.log('No ingresaste item a comparar:${ingresado}');

    }
}


    let random = Math.floor((Math.random() * 3) );
    variable[random];
    console.log(variable[random])
    piedrapapelotijera();
    

