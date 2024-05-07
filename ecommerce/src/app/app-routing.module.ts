import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'tabs',
    pathMatch:'full'

  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'details-product/:id',
    loadChildren: () => import('./product/details-product/details-product.module').then( m => m.DetailsProductPageModule)
  },
  {
    path: 'mycart',
    loadChildren: () => import('./product/mycart/mycart.module').then( m => m.MycartPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path:'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m=> m.TabsPageModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./client/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./client/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
   {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'add-article',
    loadChildren: () => import('./seller/add-article/add-article.module').then( m => m.AddArticlePageModule)
  },
  {
    path: 'edit-article/:id',
    loadChildren: () => import('./seller/edit-article/edit-article.module').then( m => m.EditArticlePageModule)
  },
  {
    path: 'home-seller',
    loadChildren: () => import('./seller/home-seller/home-seller.module').then( m => m.HomeSellerPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./seller/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./seller/order/order.module').then( m => m.OrderPageModule)
  },  {
    path: 'adminprofile',
    loadChildren: () => import('./admin/adminprofile/adminprofile.module').then( m => m.AdminprofilePageModule)
  },


//   {    path: 'tabs',
//   children: [
//     {
//       path: 'tab1',
//       loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
//     },
//     {
//       path: 'tab2',
//       loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
//     },
//     // {
//     //   path: 'tab3',
//     //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
//     // },
//     {
//       path: '',
//       redirectTo: '/tabs/tab1',
//       pathMatch: 'full'
//     }
//   ]
// }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
