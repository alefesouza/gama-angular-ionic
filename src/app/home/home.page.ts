import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date = new Date();

  constructor(public alertController: AlertController, private router: Router) {}

  open() {
    this.router.navigateByUrl('/detalhes');
  }

  async exibirAlerta() {
    const alerta = await this.alertController.create({
      header: 'Olá',
      subHeader: 'Como você está?',
      buttons: ['Bem', 'Mal'],
    });

    await alerta.present();
  }


}
