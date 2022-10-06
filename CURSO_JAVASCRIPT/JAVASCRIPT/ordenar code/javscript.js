/*Crea una clase Libro*/

class libro{
    libreria(titulo){
        this.titulo = titulo
        //this.autor = autor
        //this.genero =genero
    }
    book(){
        return `El libro ${this.titulo}`}
}

let books=[]

function validarTitulo (){
    while(true){
        let titulo = prompt(`ingresa el ${i+1} libro con su titulo `);    
        if(titulo ===null || titulo==""){
             alert('ingrese un libro');
        }
        else{
        books.push(new libro(titulo));
        console.log(titulo);
        return titulo;

    }
}}

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
        return autor;
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
                alert('Ingresa un genero de los permitido: aventura, terror, fantasia')
            }
}
}
    }}

for (i=0; i<3; i++)
{
    validarTitulo();   
     
    //validarAutor();  
    //validarGenero();  

}
