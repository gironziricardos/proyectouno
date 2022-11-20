import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudempleadosService } from '../servicios/crudempleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  formularioempleado: FormGroup;
  
  constructor(
    public formulario: FormBuilder,
    private servicio: CrudempleadosService
    ) { 
    this.formularioempleado = this.formulario.group(
      {
        id: [''],
        nombre: [''],
        correo: ['']
      }
    )
  }

  ngOnInit(): void {

  }
  enviarInfo() {
    console.log("hola");
    console.log(this.formularioempleado.value);
    this.servicio.agregarEmpleado(this.formularioempleado.value).subscribe();
  }

}


