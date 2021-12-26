import {Component, OnInit} from '@angular/core';
import {JwtClientService} from "../jwt-client.service";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any = {
    "username": "",
    "password": ""
  }
  response: any;

  constructor(private jwtClientService: JwtClientService) {
  }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any) {
    let res = this.jwtClientService.generateToken(authRequest);
    res.subscribe(data => this.accessAPI(data));

  }

  public accessAPI(token: any) {
    let res = this.jwtClientService.welcome(token);
    res.subscribe(data => this.response = data);
  }

}
