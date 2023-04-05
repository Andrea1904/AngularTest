const valor: String = 'Andrea';

class Persona {
  // esta es una opcion
  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
 }
  // otra opcion directamente con TS

  class Person {
     constructor (private age :number , public lastName:string){

     }
  }

  // se inicializa o se manda a llamar asi para las dos formas
 // se tiene valores privados por lo que solo se puede acceder desde la clase

  const prueba = new Person (15,'Lopez')
