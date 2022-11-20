import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empleados } from './empleados';

@Injectable({
  providedIn: 'root'
})
export class CrudempleadosService {
  API:string='http://localhost/empleados/';
  constructor(
    private conexionservicio:HttpClient
  ) { }
  agregarEmpleado(datosEmpleado:empleados):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertar=1",datosEmpleado);
  }
}
