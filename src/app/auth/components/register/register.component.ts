import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router:Router
  ) {
    this.buildForm();
  }


    private buildForm(){
    this.registerForm = this.formbuilder.group({
      username: ['', [ Validators.required]],
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-0.-]+\\.[a-zA-Z]{2,4}$')]],
      password:  ['', [ Validators.required]],
      validatePassword:['',[Validators.required]]
    });
  }
  public onRegister(){
    console.log(this.registerForm);
    this.registerForm.valid? this.goToDashboard() : this.registerForm.markAllAsTouched();
   }
 
   public goToDashboard(){
     this.router.navigate(['/dashboard']);
 
   }
}
