import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  paragraph: string =
    "Thanks for using my app.\n \n \
  If you like this app please leave a rating or if you come across any bugs\
   please contact me at syntappz@gmail.com thanks.\n\n\
   All documentation used in this app was from mozilla.org.\n\n\
   Created by Syntappz.\n";

  constructor(private modelController: ModalController) {}

  async openModel() {
    const modal = await this.modelController.create({
      component: ModalPage,
      componentProps: {
        title: "Information",
        paragraph: this.paragraph,
        symbol: "info"
      }
    });
    return await modal.present();
  }
}
