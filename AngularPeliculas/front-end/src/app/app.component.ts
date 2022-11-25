import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEncines = [{
        titulo: 'Spider-Man Far From Home',
        fechaLanzamiento: new Date(),
        precio: 1400.99
          }, {
            titulo: 'Moana',
            fechaLanzamiento: new Date(),
            precio: 300.99
              }];

              
    }, 3000);
  }

  title = 'Al valor que yo quiera';

  peliculasEncines;
  peliculasProximosEstrenos = [{
    titulo: 'Avengers: Endgame',
    fechaLanzamiento: new Date(),
    precio: 1400.99
      }, {
        titulo: 'Inception',
        fechaLanzamiento: new Date(),
        precio: 300.99

  },
  {
    titulo: 'Rocky',
    fechaLanzamiento: new Date(),
    precio: 300.99

}
];

  duplicarNumero(valor:number): number
  {
     return valor * 2 ;
  }

}
