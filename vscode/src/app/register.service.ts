import { HttpClient  ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl="http://localhost:4000/tourist/settourist";
  constructor(private httpclient:HttpClient) {  }
  

registerUser(user:User): Observable<Object>{
   console.log(user);
   return this.httpclient.post(`${this.baseUrl}`,user)

}

  private baseUrl1="http://localhost:4000/tourist/gettourist";

  getUserList():Observable<User[]>{
    return this.httpclient.get<User[]>(`${this.baseUrl1}`)
    


  }}
  

