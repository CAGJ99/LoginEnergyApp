import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router:Router
  ) { 
    this.buildForm()
  }


  private buildForm(){
    this.formLogin = this.formbuilder.group({
      username: ['', [ Validators.required]],
      password:  ['', [ Validators.required]],
    });
  }

  public onLogin(){
   this.formLogin.valid? this.goToDashboard() : this.formLogin.markAllAsTouched();
  }

  public goToDashboard(){
    this.router.navigate(['/dashboard']);

  }

  public onGoToRegisterPage(){
    this.router.navigate(['auth/register']);
  }
}
