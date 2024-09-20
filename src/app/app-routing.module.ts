import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastroPage } from './cadastro/cadastro.page';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroPage
  },
  {
    path: '',
    redirectTo: 'inicial', // Redireciona para a página inicial
    pathMatch: 'full'
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then(m => m.InicialPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'explorar',
    loadChildren: () => import('./explorar/explorar.module').then(m => m.ExplorarPageModule)
  }, 
  {
    path:'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path:'tab1',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path:'tab1',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
