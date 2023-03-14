import { Component } from '@angular/core';
import { ThemaInputButton } from './enums/button-login.enum';
import { LoginData } from './interface/data-login.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taller-angular-agcd-ated';
  themaInput=ThemaInputButton
  recibirRespuesta(e:LoginData){
    alert(e.password)
  }
}

