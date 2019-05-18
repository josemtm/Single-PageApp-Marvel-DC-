import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroe:any[]=[];
  termino:string
  

  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService: HeroesService) {

              }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

    this.heroe = this._heroeService.buscarHeroe( params['termino']),
    this.termino = params['termino']
    console.log(this.heroe)
    });
        
  }
  
  

  
}
