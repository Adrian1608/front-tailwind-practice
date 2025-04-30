import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { CommonModule } from '@angular/common';
import { CustomButtonModule } from '../../shared/custom-button/custom-button.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CustomButtonModule
  ],
  providers: [],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
