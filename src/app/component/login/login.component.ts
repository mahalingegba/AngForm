import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})
  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/admin']);
    }
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).
      subscribe((res)=>{
        this.router.navigate(['/admin']);
        console.log('Logged In...')
      }
      ,(err)=>{
        alert(err.message);
      })
    }
  }

}
