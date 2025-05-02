import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome-interface', title: 'Welcome!' ,
    loadChildren: () => import('./features/welcome-interface/welcome-interface.module').then(c => c.WelcomeInterfaceModule)
  },
  {
    path: '', redirectTo: '/welcome-interface', pathMatch: 'full'
  },
  {
    path: 'person-register', title: 'Registrar personas',
    loadChildren: () => import('./features/person-register/person-register.module').then(c => c.NotFoundModule)
  },
  {
    path: '**', title: 'Page not found' ,
    loadChildren: () => import('./features/not-found/not-found.module').then(c => c.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
