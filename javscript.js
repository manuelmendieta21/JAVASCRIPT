/*Crea una clase Libro*/
class libro{
    libreria(titulo, autor, year, genero){
        this.titulo = titulo
        this.autor = autor
        this.year = year
        this.genero =genero
    }
    book(){
        return `El libro ${this.titulo} es del autor ${this.autor} fecha de publicacion del año ${this.year} , se encuentra en la categroria ${this.genero} `
    }
}

function validarTitulo (titulo){
    while(true){
        let titulo = prompt(`ingresa el ${i+1} libro con su titulo `);    
        if(titulo ===null){
             alert('ingrese un libro');
        }
            else{
            if(titulo==""){ 
                alert('ingrese un libro');
        } 
        else{
        break;
    }
    }

}
}

function validarAutor (autor){while(true){
    let autor = prompt(`ingresa el ${i+1} el autor del libro `);    
    if(autor ===null){
         alert('ingrese un autor');
    }
    else{
    if(autor==""){ 
         alert('ingrese un autor');
        } 
    else{
        break;
    }
    }

}}
 
function  validarGenero (genero){
    while(true){
        let genero = prompt(`ingresa el Genero del libro `);    
        if(genero ==null){
             alert('ingrese un genero');
        }
            else{
            if(genero==""){ 
                alert('ingrese un genero');
        } 
        else{
            if(genero=="aventura"|| genero =="terror"|| genero=="fantasia"){
                console.log(`haz ingresado ${genero}`);
                return;
            }
            else{
            }
}
}
    }}


for (i=0; i<3; i++)
{
    let arraylibros= [2];
    //validarTitulo();
    //validarAutor();  
    validarGenero();  

}


// let genero = prompt("Ingresa el genero")
//     if(genero=="aventura"|| genero =="terror"|| genero=="fantasia"){
//         console.log(genero);
//     } 
//     else{
//         alert("Ingrese un genero valido");
//     }
