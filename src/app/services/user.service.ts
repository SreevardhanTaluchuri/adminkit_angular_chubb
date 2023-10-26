import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../interfaces/user";

@Injectable({
    providedIn : 'root'
})
export class UserService{
    private _users : User[] = [{
        firstName : "Sample",
        lastName : "sample",
        email : "sample@sample.com",
        notification : 'email',
        phone : null,
        id : 1,
    }];
    private users_url : string = "api/users/users.json";

    constructor(private http : HttpClient){ }

    addUser(user : User) : Observable<User>{
        return this.http.post<User>(this.users_url , user).pipe(
            catchError(this.handleError)
        )
    }

    getUsers() : Observable<User[]>{
        return this.http.get<User[]>(this.users_url).pipe(tap(users => this._users = users),catchError(this.handleError))
    }
    
    set users(user : User){
        this.users.push(user);
    }

    get users() : User[]{
        return this._users;
    }


    private handleError(err : HttpErrorResponse){
        let error = '';
        if(err.error instanceof ErrorEvent){error = `An error occured in ${err.error.message}`}
        else{error = `Server returned with error ${err.status} and ${err.message}`}
        console.log(error);
        return throwError(() => error);
      }
}