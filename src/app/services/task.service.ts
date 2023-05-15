import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private _http: HttpClient) {}

  addTask(data: any): Observable<any> {
    return this._http.post('https://task-app-back-aag.onrender.com/tasks', data);
  }

  updateTask(id: number, data: any): Observable<any> {
    return this._http.put(`https://task-app-back-aag.onrender.com/tasks/${id}`, data);
  }

  getTaskList(): Observable<any> {
    return this._http.get('https://task-app-back-aag.onrender.com/tasks');
  }

  deleteTask(id: number): Observable<any> {
    return this._http.delete(`https://task-app-back-aag.onrender.com/tasks/${id}`);
  }
}