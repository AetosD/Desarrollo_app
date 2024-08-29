import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  
  usuario:string
  nombre:string
  apellido:string
  direccion:string
  telefono:string
  arreglo:Contacto[]
  constructor() { }

  ngOnInit() {
    this.usuario=localStorage.getItem("usuario") ?? ''
  }

  grabar(){
    let con:Contacto
    con=new Contacto()
    con.nombre=this.nombre
    con.apellido=this.apellido
    con.direccion=this.direccion
    con.telefono=this.telefono
    if (localStorage.getItem("contactos")) {
      this.arreglo=JSON.parse(localStorage.getItem("contactos") ??'')
    } else {
      this.arreglo=[]
    }
    this.arreglo.push(con)
    localStorage.setItem("contactos",JSON.stringify(this.arreglo))
    console.log("Grabo")
  }
}
