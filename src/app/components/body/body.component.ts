import { Component } from "@angular/core";

@Component ({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar = true;
  frase:any = {
    mensaje: 'Un gran poder, conlleva a una gran responsabilidad',
    autor: 'Ben Parker',
    url: 'https://sites.google.com/site/spidermanpp2013/_/rsrc/1468751337798/home/pagina-web-2/benjamin-parker-o-tio-ben/ssssss.jpg?height=300&width=400'
  };
  personajes:string[] = ['Spiderman', 'Venom', 'Dr. Octopus']

}