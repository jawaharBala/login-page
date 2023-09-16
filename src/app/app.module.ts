import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { RouterModule } from '@angular/router';
import { ServicesService } from './services/services.service';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    PasswordchangeComponent,
    LoginComponent,
    TodosComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component:LoginComponent},
      {path: 'passwordchange', component:PasswordchangeComponent},
      {path:'login', component:LoginComponent},
      {path:'todos', component:TodosComponent}
     
    ]),
  HttpClientModule
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { };
