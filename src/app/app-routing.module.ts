import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ListadoempleadosComponent } from './listadoempleados/listadoempleados.component';
import { EdicionComponent } from './edicion/edicion.component';
const routes: Routes = [
  { path: 'frmcont', component: FormcontactoComponent},
  { path: '', pathMatch:'full', redirectTo:'inicio'},
  { path: 'inicio', component: InicioComponent},
  { path: 'quienes', component: QuienessomosComponent},
  { path: 'empleados', component: EmpleadosComponent},
  { path: 'lista', component: ListadoempleadosComponent},
  { path:'edicion/:id', component:EdicionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
