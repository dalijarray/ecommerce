import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'details-product',
        loadChildren: ()=> import('../product/details-product/details-product.module').then(m=>m.DetailsProductPageModule)
      },
      {
        path: 'settings',
        loadChildren: ()=> import('../settings/settings.module').then(m=>m.SettingsPageModule)
      },
      {
        path: 'home',
        loadChildren: ()=> import('../home/home.module').then(m=>m.HomePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}