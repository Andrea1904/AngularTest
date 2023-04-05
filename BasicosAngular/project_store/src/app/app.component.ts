import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name= "Andrea";
  age= 18;
  btnGuardar = true;

  persona= {
    name: "Andrea",
  age:18,
  }


  activarBoton(){
    // aplica solo para cargar un la funcion solo con el estado falso en el evento del boton
  //this.btnGuardar= false;

  // de esta manera se vuelve iteractivo el cambio del estado

  this.btnGuardar=  !this.btnGuardar;
  }

  ageEvent(){
    //aumentamos el valor por cada vez que ejecute el boton

    this.persona.age+=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLAnchorElement;
    console.log(element.scrollTop)
  }

  cambiarNombre(event : Event){
    const element= event.target as HTMLInputElement;
    this.persona.name=element.value;
  }
}


