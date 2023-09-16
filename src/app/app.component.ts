import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { customValidation } from './common/customValidations.validators';
import { Router, RouterLink,RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router:Router){}
  title:any;


}
