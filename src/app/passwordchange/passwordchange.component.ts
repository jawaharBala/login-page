import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { customValidation } from '../common/customValidations.validators';

@Component({
  selector: 'passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.scss']
})
export class PasswordchangeComponent  {
  
  changeForm: FormGroup;
  constructor(private FB:FormBuilder) { 
  this.changeForm = this.FB.group ({
    oldPassword: ['', [
    Validators.required,
  ]],   
    newPassword: ['',[
      Validators.required,
      Validators.minLength(6),
      customValidation.cannotContainSpace,
    ]],
    confirmPassword: ['',[
      Validators.required,
      customValidation.cannotContainSpace,

    ]]
  },{
    validator:customValidation.passwordsMatch
  });
  }

get getoldPassword ():any{
  
  return this.changeForm.get('oldPassword')
} 
get getnewPassword ():any{
  
  return this.changeForm.get('newPassword')
} 
get getconfirmPassword ():any{
  
  return this.changeForm.get('confirmPassword')
}


onSubmit(){
  console.log(this.getconfirmPassword.errors)
  
}


}

