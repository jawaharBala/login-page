import { AbstractControl, ValidationErrors } from "@angular/forms";



export class customValidation{
  static  cannotContainSpace (control:AbstractControl):ValidationErrors | null{
        if (control && (control.value as string).indexOf(' ') >=0){
        return {cannotContainSpace:true};}
        else return null;
    }
  static passwordsMatch (control:AbstractControl):ValidationErrors |null {
  
    let newPassword = control.get('newPassword')?.value;
    let confirmPassword = control.get('confirmPassword')?.value;
    if (confirmPassword === newPassword)
        return {passwordsMatch:false}
        
       else  return {passwordsMatch:true};
  
}}