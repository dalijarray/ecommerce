import { Component } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  canDismiss = false;

  presentingElement = null;

  

  constructor() {}
  
  ngOnInit() {
    // this.presentingElement = document.querySelector('.ion-page');
    console.log("ola")
  }


  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }
}
