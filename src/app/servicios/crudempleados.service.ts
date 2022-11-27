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
  editarEmpleado(id:any,datosEmpleado:any):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertar=1",datosEmpleado);
  }
  consultarEmpleado(){
    return this.conexionservicio.get(this.API);
  }
  obtenerEmpleado(id:any){
    return this.conexionservicio.get(this.API+"?consultar="+id);
  }
  borradoRegistro(id:any):Observable<any>{
    return this.conexionservicio.get(this.API+"?borrar="+id);
  }
}
