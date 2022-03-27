import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  college_name = "George Brown College"
  // used for switch
  city = "Toronto"

  // used for if
  isDisplay = false

  //used for fetching data
  userList: any;


  constructor(private dataService: DataService) {
    dataService.getUserByParam().subscribe(data => {
      console.log(data)
    })
  }

  btnClickGetUsers(){
    this.dataService.getAllUsers().subscribe(users => {
      console.log(users)
      this.userList = users;
    })
  }

  // fetch data for just app component, but we should use a service instead so its accessible everywhere
  /*
  constructor(
    private httpClient: HttpClient
  ) {
      this.getData()
  }
  ngOnInit() {
    this.getData()
  }

  getData() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users")
    .subscribe(data => {
      console.log(data)
    })
  }
  */
}
