import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  serverUrlEndPoint="https://reqres.in/api/users"
  constructor(private httpClient:HttpClient) { }

  getUsers()
  {
    return this.httpClient.get<any>(this.serverUrlEndPoint).pipe(
      take(5),
      retry(1),
      catchError(this.handleError)
      
    )
  }
  addUser(user:object)
  {

    return this.httpClient.post(this.serverUrlEndPoint,user,{responseType:"json"}).pipe(
      catchError(this.handleError)
    )
  }
  getUsersFromJsonPlaceHolder()
  {
    this.serverUrlEndPoint="https://jsonplaceholder.typicode.com/users"
    return this.httpClient.get<any[]>(this.serverUrlEndPoint).pipe(
      take(2),
      retry(1),
      catchError(this.handleError)
      
    )
  }

  updateUser(userToBeUpdated:object)
  {

    return this.httpClient.patch(this.serverUrlEndPoint,userToBeUpdated,{responseType:"json"}).pipe(
      catchError(this.handleError)
    )
  }
  deleteUser(userToBeUpdated:any)
  {
    var delUrl=this.serverUrlEndPoint+ "/"+userToBeUpdated?.id;
    return this.httpClient.delete(delUrl).pipe(
      catchError(this.handleError)
    )
  }

  handleError(err:any)
  {
    let msg:any;
    if(err.error instanceof ErrorEvent)
    {
      // all the client/network errors will be logged 
      msg=err.error.message
    }
    else
    {
      // all the server side errors
      msg=`Error code : ${err.status} ; Msg : ${err.message}`
    }
    console.log("Error in talk with server ",msg);
    // return an observable
    return throwError(()=>{
      new Error("Error occurred when fetching the data from the server")
    });

  }
}
