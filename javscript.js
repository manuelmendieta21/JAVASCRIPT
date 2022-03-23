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
    let arraylibros[] 
    arraylibros= prompt(`ingresa el libro ${i+1}`);
    
    
}

function validardatos(){

}
/*
Crea una clase Libro
La clase libro tendrá título,
autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo
los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados
alfabéticamente
Crea una función que pida un género y muestre la información
de los libros que pertenezcan a ese género usando un el método
que devuelve la información

*/