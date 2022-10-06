let variable =['piedra','papel','tijera'];

function piedrapapelotijera(){
    let ingresado =prompt('Selecciona: piedra, papel, tijera ')
    
    if(variable[random]===ingresado){
        console.log(`Empatados, Seleccionaste ${ingresado} y la computadora seleccionon ${variable[random]}`)
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
                else
                 if(variable[random]==='piedra' && ingresado==='papel')
                {
                    console.log(`Seleccionaste ${ingresado} Ganas contra ${variable[random]}`)
                }
                else 
                if(variable[random]==='papel' && ingresado==='tijera')
                {
                    console.log(`Seleccionaste ${ingresado} Ganas contra ${variable[random]}`)
                }
                else 
                if(variable[random]==='papel' && ingresado==='piedra')
                {
                    console.log(`Seleccionaste ${ingresado} Pierdes contra ${variable[random]}`)
                }
                else{console.log(`No ingresaste item a comparar, Seleccionaste : ${ingresado}`);}
            }
        }
                
    }    
        
}


    let random = Math.floor((Math.random() * 3) );
    variable[random];
    console.log(`La computadora a seleccionado :${variable[random]}`);
    piedrapapelotijera();
    
