import { Todos } from './../common/interfaces';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router, RouterLink,RouterModule} from '@angular/router';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
 
 todos!:any;
  constructor(private todoservice:ServicesService,
    private router:Router) { 
    
  }

  ngOnInit() {
      this.todoservice.get().subscribe(response=>{
        console.log(response)
        this.todos = response;       
      })};
  
    update(id:HTMLInputElement, todo:any){
      let todoId = id;
      todo.title = todo.title+'---updated';
      this.todoservice.update(todoId,todo).subscribe(response=>{
        console.log(response);
        
      })};
    delete(id:HTMLInputElement,todo:any){
      console.log(id,todo);
      let deleteId = this.todos.indexOf(todo);
      this.todos.splice(deleteId,1)
    
    }
    returnLogin(){
      this.router.navigate(['login'])
    }
}

