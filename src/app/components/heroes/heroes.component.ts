import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  constructor(private _servicioHeroe:HeroesService,
              private router:Router) { }

  heroes:Heroe[]=[];

  ngOnInit() {
    this.heroes = this._servicioHeroe.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(idx:number){
    this.router.navigate( ['/heroe',idx] );
  }

}
