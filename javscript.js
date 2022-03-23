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

for (i=0; i<3; i++)
{
    arraylibros= [3];
    while(true){
        ingresBook = prompt(`ingresa el ${i+1} libro `);
        if(ingresBook ===null){
             alert('ingrese un libro');
        }
        else{
        if(ingresBook==""){ 
             alert('ingrese un libro');
            } 
        else{
            break;
        }
        }
        
    }
    arraylibros[i]= (ingresBook)
    console.log(`el ${i+1} libro es ${arraylibros[i]}`)}