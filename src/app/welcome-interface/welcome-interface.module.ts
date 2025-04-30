import { NgModule } from '@angular/core';
import { WelcomeInterfaceComponent } from './welcome-interface.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeInterfaceComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  exports: [WelcomeInterfaceComponent]
})
export class WelcomeInterfaceModule { }
