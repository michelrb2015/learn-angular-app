import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { TestBed } from '@angular/core/testing';
import { EMPTY, from, Observable, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TodoService],
    });
    service = TestBed.inject(TodoService);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server.', () => {
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });
  it('should call the server to save the changes when a new todo is gonna be added', () => {
    let spy = spyOn(service, 'add').and.callFake(()=>{
      return EMPTY;
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });
  it('should add the new todo returned from the server', () => {
    let newTodo = {id: 1};
    spyOn(service, 'add').and.returnValue(from([newTodo]));

    component.add();

    expect(component.todos.includes(newTodo)).toBe(true);
  });
  it('should set the message property if server return an error adding todo', () => {
    let message = 'error from the server';
    spyOn(service, 'add').and.returnValue(throwError(()=> new Error(message)));

    component.add();

    expect(component.message.message).toBe(message);
  });
  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });
  it('should NOT call the server to delete a todo item if the user cancel', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
