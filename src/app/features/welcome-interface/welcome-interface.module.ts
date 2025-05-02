import { NgModule } from '@angular/core';
import { WelcomeInterfaceComponent } from './welcome-interface.component';
import { CommonModule } from '@angular/common';
import { CustomButtonModule } from '../../shared/custom-button/custom-button.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WelcomeInterfaceComponent }
];

@NgModule({
  declarations: [
    WelcomeInterfaceComponent
  ],
  imports: [
    CommonModule,
    CustomButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [WelcomeInterfaceComponent]
})
export class WelcomeInterfaceModule { }
