import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  'registerForm': FormGroup
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient, private common: CommonService) { }
  ngOnInit() {
    this.registerForm = this.fb.group({
      fname: ['', Validators.required],
      email: ['', Validators.required],
      pwd: ['', Validators.required],
      cpwd: ['', Validators.required]
    },
      { validator: ConfirmPassword('pwd', 'cpwd') })
  }
  submitForm() {
    if (this.registerForm.status == 'VALID') {
      this.common.postData(this.registerForm.value).subscribe()
      this.router.navigate(['/productList'])
    }
    console.log(this.registerForm, "21:::")
  }
}

export function ConfirmPassword(password: any, confirmPassword: any) {
  return (formControl: FormGroup) => {
    let pwd = formControl.controls[password]
    let cpwd = formControl.controls[confirmPassword]
    if (
      cpwd.errors &&
      !cpwd.errors['confirmedValidator']
    ) {
      return;
    }
    if (pwd.value !== cpwd.value) {
      cpwd.setErrors({ confirmedValidator: true });
      console.log(pwd.value, cpwd.value, "38::::")


    } else {
      console.log(pwd.value, cpwd.value, "37::::")

      cpwd.setErrors(null);
    }
  }
}
