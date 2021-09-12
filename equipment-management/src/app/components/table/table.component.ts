import {Component, Input, OnInit} from '@angular/core';
import {TableColumnInterface} from "./table-column.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataColumn: TableColumnInterface[] = [];
  @Input() dataSource: any[] | any;
  constructor() { }

  ngOnInit(): void {
  }

}
