import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentComponent } from './equipment.component';
import {EditComponent} from "./edit/edit.component";
import {ComponentsModule} from "../components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EquipmentComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EquipmentModule { }
