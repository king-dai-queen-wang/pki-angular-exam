import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EquipmentService} from "../../../service/equipment.service";
import {FormBuilder} from "@angular/forms";
import {EquipmentModel} from "../../../models/equipment.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnChanges {
  @Input() editData: EquipmentModel | null = null;
  @Input() open: boolean = false;
  @Input() actionType: 'edit' | 'create' | 'preview' = "create";
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter();

  get modalTitle() {
    switch (this.actionType) {
      case "preview": return '详情';
      case "edit": return  '编辑';
      case "create": return '新增';
    }
  }
  profileForm = this.fb.group({
    brand: [''],
    id: [''],
    manufactureDate: [''],
    model: [''],
    weight: [''],
  });

  constructor(public equipmentService: EquipmentService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  close() {
    this.closeEmitter.emit();
  }

  submit() {
    switch (this.actionType) {
      case "create": {
        this.equipmentService.addEquipment(this.profileForm.getRawValue()!).subscribe(res => {
          console.log('cusscess');
          this.close();
        });
        break;
      }
      case "edit":{
        this.equipmentService.editEquipment(this.profileForm.getRawValue()!).subscribe(res => {
          console.log('cusscess');
          this.close();
        });
        break;
      }
    }
  }

  ngOnChanges({actionType, editData}: SimpleChanges): void {
    if(actionType) {
      if(this.actionType === 'preview') {
        this.profileForm.disable();
      }else if (this.actionType === 'create') {
        this.profileForm.enable();
      } else if(this.actionType === 'edit') {
        this.profileForm.get('id')?.disable();
      }
    }
    if(editData) {
      this.profileForm.patchValue({
        brand: this.editData!.brand,
        id: this.editData!.id,
        manufactureDate: this.editData!.manufactureDate,
        model: this.editData!.model,
        weight: this.editData!.weight,
      });

    }

  }


}
