import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CustomButtonModule } from '../../shared/custom-button/custom-button.module';
import { RouterModule, Routes } from '@angular/router';
import { PersonRegisterComponent } from './person-register.component';

const routes: Routes = [
  { path: '', component: PersonRegisterComponent }
];

@NgModule({
  declarations: [
    PersonRegisterComponent
  ],
  imports: [
    CommonModule,
    CustomButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [PersonRegisterComponent]
})
export class NotFoundModule { }
