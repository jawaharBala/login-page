import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { customValidation } from '../common/customValidations.validators';
import { Router, RouterLink,RouterModule} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router){}
[x: string]: any;
 
  
form = new FormGroup ({
    username: new FormControl('',
  [
    Validators.required,
    Validators.minLength(4),
    customValidation.cannotContainSpace
  ]),
    
    password: new FormControl('',
    [
      Validators.required,
      Validators.minLength(6),
      customValidation.cannotContainSpace
    ])
})

get getUserName ():any{
  
  return this.form.get('username')
} 
get getPassword ():any{
  
  return this.form.get('password')
} 

onSubmit(){
  console.log(this.getUserName.errors)
  if (this.getUserName.errors){    
  }
}



}
