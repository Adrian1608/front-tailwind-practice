import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './custom-button.component';


@NgModule({
  declarations: [
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  exports: [CustomButtonComponent]
})
export class CustomButtonModule { }
