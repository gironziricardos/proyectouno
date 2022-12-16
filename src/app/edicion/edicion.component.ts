import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudempleadosService } from '../servicios/crudempleados.service';


@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  formularioempleado: FormGroup;
  elID:any;
  
  constructor(
    public formulario:FormBuilder,
    private rutactiva: ActivatedRoute,
    private servicio: CrudempleadosService
  ) {
    this.elID=this.rutactiva.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.formularioempleado=this.formulario.group(
      {
        nombre:[''],
        correo:['']
      }
    );
    this.servicio.obtenerEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioempleado.setValue(
          {
           elID:respuesta
          }
        );
      }
    );
   }

  ngOnInit(): void {
  }
  enviarInfo():any{
    console.log(this.elID);
    console.log(this.formularioempleado.value);
    this.servicio.editarEmpleado(this.elID,this.formularioempleado.value).subscribe(
      ()=>{

      }
    );
  }
}
