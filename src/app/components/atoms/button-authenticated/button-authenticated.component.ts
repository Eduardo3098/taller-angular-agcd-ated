import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemaInputButton } from '../../../enums/button-login.enum'
import { LoginData } from '../../../interface/data-login.interface';
@Component({
  selector: 'app-button-authenticated',
  templateUrl: './button-authenticated.component.html',
  styleUrls: ['./button-authenticated.component.scss']
})

export class ButtonAuthenticatedComponent implements OnInit {
@Input() thema:ThemaInputButton | undefined
@Input() text:string | undefined
  @Input()
  DataLogin!: LoginData; 
@Output() valueLogin: EventEmitter<LoginData>=new EventEmitter()
themeInput=ThemaInputButton
ngOnInit(): void {
   
  }
  constructor(){
    
  }
  
  LoginUser(){
    this.valueLogin.emit({...this.DataLogin})
  }
}

