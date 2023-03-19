import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  showPassword:boolean=false
  seePassword:boolean=false
  forgotpasswordForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    confirmPassowrd:new FormControl('',[Validators.required])

  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.forgotpasswordForm.value);
  }
}
