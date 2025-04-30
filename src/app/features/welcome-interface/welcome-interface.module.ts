import { NgModule } from '@angular/core';
import { WelcomeInterfaceComponent } from './welcome-interface.component';
import { CommonModule } from '@angular/common';
import { CustomButtonModule } from '../../shared/custom-button/custom-button.module';


@NgModule({
  declarations: [
    WelcomeInterfaceComponent
  ],
  imports: [
    CommonModule,
    CustomButtonModule
  ],
  providers: [],
  exports: [WelcomeInterfaceComponent]
})
export class WelcomeInterfaceModule { }
