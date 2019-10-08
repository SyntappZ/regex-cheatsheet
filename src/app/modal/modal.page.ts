import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Input} from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() paragraph: string;
  @Input() title: string;
  @Input() symbol: string;


  constructor( private modelController: ModalController) { }

  ngOnInit() {
   
  }

  dismissModal() {
   this.modelController.dismiss()  
  }
  
  

}
