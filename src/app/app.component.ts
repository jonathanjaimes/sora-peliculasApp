import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'peliculasApp';

  termino = ""

  // peliculasEncontradas:string[] = []

  peliculas:any = []

  // vacio:boolean = true

  constructor(private servicio:ServiceService){

  }

  ngOnInit(){
    
  }

  buscar(){
    // this.peliculasEncontradas.length = 0
    // for (let item in this.peliculas.results) {
    //   console.log((this.peliculas.results[item].release_date).substr(0,4))
    //   if((this.peliculas.results[item].release_date).substr(0,4)== this.termino){
    //     this.peliculasEncontradas.push(this.peliculas.results[item].original_title)
    //   }

    // }

    // if(this.peliculasEncontradas.length!=0){
    //   this.vacio = false
    // } else {
    //   this.vacio = true
    // }

    // console.log(this.peliculasEncontradas)
    // console.log(this.vacio)
  if (this.termino!= ""){
    console.log(this.termino)
    // this.peliculasEncontradas.length = 0

    this.servicio.buscarPelicula(this.termino).subscribe({
      next: resp => {
        this.peliculas = resp;
        
        // for (let item in this.peliculas.results){
        //   console.log(this.peliculas.results[item].original_title)
        //   // this.peliculasEncontradas.push(this.peliculas.results[item].original_title)
        // }

        //   if (this.peliculas.length !=0 ) {
        //     this.vacio = false;
        //   }else {
        //     this.vacio = true
        //   }
        // console.log(resp)
        
      },
      error: err => {
      }
    })

    // if (this.peliculas.length !=0 ) {
    //   this.vacio = false;
    // }else {
    //   this.vacio = true
    // }
    // console.log(this.peliculasEncontradas)

  }

  }





}
