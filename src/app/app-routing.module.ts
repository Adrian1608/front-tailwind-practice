import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeInterfaceComponent } from './welcome-interface/welcome-interface.component';

const routes: Routes = [
  {path: 'welcome-interface', component: WelcomeInterfaceComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
