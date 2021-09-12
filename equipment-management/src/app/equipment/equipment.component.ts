import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {EquipmentService} from "../../service/equipment.service";
import {TableColumnInterface} from "../components/table/table-column.interface";
import {EquipmentModel} from "../../models/equipment.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  @ViewChild('actionTemplate', {static: true})
  actionTemplate!: TemplateRef<any>;
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter();
  actionType: 'edit' | 'create' | 'preview' = "create";
  dataColumns: TableColumnInterface[] = [];
  detailData$: BehaviorSubject<EquipmentModel> = new BehaviorSubject<EquipmentModel>(new EquipmentModel());
  editData$: BehaviorSubject<EquipmentModel> = new BehaviorSubject<EquipmentModel>(new EquipmentModel());
  openEditModal = false;

  constructor(public equipmentService: EquipmentService) { }


  ngOnInit(): void {
    this.dataColumns = [
      {
        name: '编号',
        filed: 'id'
      }, {
        name: '品牌',
        filed: 'brand'
      }, {
        name: 'model',
        filed: 'model'
      }, {
        name: 'weight',
        filed: 'weight'
      }, {
        name: 'manufactureDate',
        filed: 'manufactureDate'
      }, {
        name: '操作',
        template: this.actionTemplate
      }
    ];
    this.equipmentService.getList().subscribe();
  }

  openCreateModal() {
    this.editData$.next(new EquipmentModel());
    this.actionType = "create";
    this.openEditModal = true;
  }

  edit(data: EquipmentModel) {
    this.editData$.next(data);
    this.actionType = "edit";
    this.openEditModal = true;
  }
  delete (data: EquipmentModel){
    this.equipmentService.delete(data.id!).subscribe(res => {

    })
  }
  detail (data: EquipmentModel){
    this.editData$.next(data);
    this.actionType = "preview";
    this.openEditModal = true;
  }

}
