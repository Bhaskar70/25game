import { Component } from '@angular/core';
import  { FormControl,FormBuilder,FormControlName, FormGroup ,Validator } from '@angular/forms'
import { Store } from '@ngrx/store';
import { formData } from '../ngrx/app.action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  'loginForm' : FormGroup;
  constructor(private fb:FormBuilder , private store :Store , private route :Router){

  }
  ngOnInit() {
  this.loginForm = this.fb.group(
    {
    fname: '',
    lname :'',
    gmail :'',
    phoneNum :'',
    gender :''
    }
  )
  }
  submitForm(){
    console.log(this.loginForm.value)
    this.store.dispatch(formData({registerData :this.loginForm.value}))
    this.route.navigate(['/login'])
  }
}
