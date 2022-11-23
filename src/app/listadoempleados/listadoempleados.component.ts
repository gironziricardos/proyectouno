import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudempleadosService } from '../servicios/crudempleados.service';

@Component({
  selector: 'app-listadoempleados',
  templateUrl: './listadoempleados.component.html',
  styleUrls: ['./listadoempleados.component.css']
})
export class ListadoempleadosComponent implements OnInit {
  Empleados:any;

  constructor(
    public formulario: FormBuilder,
    private servicio: CrudempleadosService
  ) { }

  ngOnInit(): void {
    this.servicio.consultarEmpleado().subscribe(respuesta=>{
      console.log(respuesta);
      this.Empleados=respuesta;
      })
  }

}
