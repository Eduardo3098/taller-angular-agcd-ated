import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconComponent } from './components/atoms/icon/icon.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputComponent} from "./components/atoms/input/input.component";
import { ButtonAuthenticatedComponent } from './components/atoms/button-authenticated/button-authenticated.component';
import { SidebarComponent } from './components/moleculs/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonAuthenticatedComponent,
    SidebarComponent,
    IconComponent
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
