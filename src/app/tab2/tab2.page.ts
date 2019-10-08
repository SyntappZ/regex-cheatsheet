import { Component } from "@angular/core";
import { MAIN_REG, REG_METHODS, FLAGS } from './regex-data'
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
mainReg = MAIN_REG;
regMethods = REG_METHODS;
flags = FLAGS;

  constructor(private modelController:  ModalController) {}
 async getFullInfo(data, title) {
 const paragraph = data.paragraph
 
   const modal = await this.modelController.create({
     component: ModalPage,
     componentProps: {
      'title': title,
      'paragraph': paragraph,
      'symbol': data.symbol
     }
     
   })
   return await modal.present();
  }
}
