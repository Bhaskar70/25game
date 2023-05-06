import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormDataSelector } from '../ngrx/app.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private store :Store ){}
 data$ = this.store.select(FormDataSelector)
ngOnInit(){
}
}
