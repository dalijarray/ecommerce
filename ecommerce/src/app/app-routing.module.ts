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
    path: 'details-product',
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
  }
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
