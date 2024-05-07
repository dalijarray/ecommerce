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
      {
        path: 'profile',
        loadChildren: ()=> import('../profile/profile.module').then(m=>m.ProfilePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../client/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../client/signup/signup.module').then( m => m.SignupPageModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../seller/order/order.module').then( m => m.OrderPageModule)
      },
      {
        path: 'adminprofile',
        loadChildren: () => import('../admin/adminprofile/adminprofile.module').then( m => m.AdminprofilePageModule)
      },
      {
        path: 'add-article',
        loadChildren: () => import('../seller/add-article/add-article.module').then( m => m.AddArticlePageModule)
      },
      {
        path: 'edit-article/:id',
        loadChildren: () => import('../seller/edit-article/edit-article.module').then( m => m.EditArticlePageModule)
      },
      {
        path: 'home-seller',
        loadChildren: () => import('../seller/home-seller/home-seller.module').then( m => m.HomeSellerPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
       {
        path: 'search',
        loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'details-product/:id',
        loadChildren: () => import('../product/details-product/details-product.module').then( m => m.DetailsProductPageModule)
      },
      {
        path: 'mycart',
        loadChildren: () => import('../product/mycart/mycart.module').then( m => m.MycartPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
