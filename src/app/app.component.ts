import {  Component,ViewChild,OnInit } from '@angular/core';
import {ModalComponent} from './shared/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(ModalComponent) customModal:ModalComponent
  constructor() { }
  ngOnInit(): void {
  }
openModal(){
  this.customModal.open_Modal({
    title:"Nitesh",
    size: 'modal-lg'
  })
}

}
