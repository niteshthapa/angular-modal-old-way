import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() title:string;
obj = {title:"Title",size:"modal-sm"};
  constructor() { }
  isVisible: boolean = false;
  open_Modal(obj_param:any = {})  {
    this.obj = {...this.obj,...obj_param};
    this.isVisible = !this.isVisible;
  }
  close_Modal() {
    this.isVisible = !this.isVisible;
  }
  ngOnInit(): void {
  }

}
