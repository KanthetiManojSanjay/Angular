import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: any;
  searchName: string = ""

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://demo4690221.mockable.io/getPlayersHistory').subscribe((data) => this.players = data);
  }

}
