import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemaInputButton } from '../../../enums/button-login.enum'
@Component({
  selector: 'app-button-authenticated',
  templateUrl: './button-authenticated.component.html',
  styleUrls: ['./button-authenticated.component.scss']
})

export class ButtonAuthenticatedComponent implements OnInit {
@Input() thema:ThemaInputButton | undefined
@Input() text:string | undefined
@Output() valueLogin: EventEmitter<string>=new EventEmitter()
themeInput=ThemaInputButton
ngOnInit(): void {
   
  }
  constructor(){
    
  }
  LoginUser(){
    this.valueLogin.emit("login funcionando")
  }
}

