import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [{
      path: '',
      component: HomeComponent
    }, {
      path: 'equipment',
      loadChildren: () => import('./equipment/equipment.module').then(m => m.EquipmentModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
