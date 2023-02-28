import { Student } from './Student';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private HttpClient:HttpClient) { 

  }

  GetAllStudent():Observable<any>
  {
    return this.HttpClient.get<any>("https://localhost:7224/api/student");
  }
  saveStudent(newStudent:Student):Observable<Student>
  {
    return this.HttpClient.post<Student>("https://localhost:7224/api/student",newStudent);

  }
  updateStudent(editStudent:Student):Observable<Student>
  {
    return this.HttpClient.put<Student>("https://localhost:7224/api/student",editStudent);
  }
  deleteStudent(deleteStudent:Student):Observable<any>
  {
    return this.HttpClient.delete<any>("https://localhost:7224/api/student" + id);

  }
}
