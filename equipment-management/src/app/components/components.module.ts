import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table/table.component";
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [TableComponent, ModalComponent],
  imports: [
    CommonModule
  ],
    exports: [
        TableComponent,
        ModalComponent
    ]
})
export class ComponentsModule { }
