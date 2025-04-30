import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundModule } from './not-found/not-found.module';
import { WelcomeInterfaceModule } from './welcome-interface/welcome-interface.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    WelcomeInterfaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
