import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = "https://jsonplaceholder.typicode.com"

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient
    .get(`${this.BASE_URL}/users`)
    .pipe(retry(2), catchError(this.handleError))
    // dont subscribe, use return above instead
    /*
    .subscribe(data => {
      console.log(data)
    })
    */
  }

  getUserById(id: number) {
    return this.httpClient.get(`${this.BASE_URL}/users${id}`)
  }
  getAllPosts() {
    return this.httpClient.get(`${this.BASE_URL}/posts`)
  }

  getUserByParam() {
    const options = {
      params: new HttpParams({fromString: "page=2"})
    }
    return this.httpClient.get("https://reqres.in/api/users", options)
  }

  handleError(error: HttpErrorResponse) {
    let errorMsg = "Unknown error has occured";
    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMsg = `ERROR: ${error.error.message}`
    }
    else {
      // server side error
      errorMsg = `ERROR: ${error.error.message} - ${error.status}`
    }
    window.alert(errorMsg)
    return throwError(errorMsg)
  }
}
