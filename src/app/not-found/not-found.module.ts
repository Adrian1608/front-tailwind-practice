import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
