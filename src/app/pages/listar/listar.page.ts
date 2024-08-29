import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor() { }
  arreglo:Contacto[]
  ngOnInit() {
    this.arreglo=JSON.parse(localStorage.getItem("contactos")??'')
  }
  eliminar(nombre:string){
    let arr_temp:Contacto[]=[]
    for (let index = 0; index < this.arreglo.length; index++) {
      const element = this.arreglo[index];
      if (element.nombre!=nombre) {
        arr_temp.push(element)
      }      
    }
    localStorage.setItem("contactos",JSON.stringify(arr_temp));
    this.arreglo=arr_temp
  }
}
