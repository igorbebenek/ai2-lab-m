import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class Tasks {

  private baseUrl = 'http://localhost:52940/todos';

  constructor(private http: HttpClient) {}

  public index(archived = false): Observable<Task[]> {
    return this.http.get<Task[]>(
      `${this.baseUrl}?archived=${archived}&_sort=id&_order=asc`
    );
  }

  public post(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  public put(task: Task): Observable<Task> {
    if (!task.id) throw new Error('Task id is required for PUT');
    return this.http.put<Task>(`${this.baseUrl}/${task.id}`, task);
  }

  public delete(task: Task): Observable<any> {
    if (!task.id) throw new Error('Task id is required for DELETE');
    return this.http.delete(`${this.baseUrl}/${task.id}`);
  }
}
