import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() headLine: string = '';
  @Input() open: boolean = false;
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() submitEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEmitter.emit();
  }

  submit() {
    this.submitEmitter.emit()
  }

}
