import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputComponent} from "./components/atoms/input/input.component";
import { ButtonAuthenticatedComponent } from './components/atoms/button-authenticated/button-authenticated.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonAuthenticatedComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InputComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
