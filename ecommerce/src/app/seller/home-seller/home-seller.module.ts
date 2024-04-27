import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSellerPageRoutingModule } from './home-seller-routing.module';

import { HomeSellerPage } from './home-seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSellerPageRoutingModule
  ],
  declarations: [HomeSellerPage]
})
export class HomeSellerPageModule {}
