import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  users: any


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    let res = this.http.get("https://jsonplaceholder.typicode.com/users");
    res.subscribe((data) => this.users=data);
  }

}
