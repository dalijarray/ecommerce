import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  totalPrice: number=0;
  deliveryAddress:string='';
  paymentMode:string='';
  constructor( private navCtrl: NavController,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.totalPrice = params['totalPrice'];
    });
  }
  goBack() {
    this.navCtrl.back();
  }
}