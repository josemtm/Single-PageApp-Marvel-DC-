import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-carta-heroe',
  templateUrl: './carta-heroe.component.html',
  styleUrls: ['./carta-heroe.component.css']
})
export class CartaHeroeComponent implements OnInit {
  @Input() heroe:any={};
  @Input() i:number
  @Output() heroeSeleccionado: EventEmitter<number>
  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
    
   }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate( ['/heroe',this.i] );
  }
}
