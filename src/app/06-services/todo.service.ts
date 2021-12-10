
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo:any) {
    return this.http.post('...', todo);
  }

  getTodos() { 
    return this.http.get('...');
  }

  delete(id: any) {
    return this.http.delete('...');
  }
}
