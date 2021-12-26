import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) {
  }

  public generateToken(request: any) {
    return this.http.post("", request, {responseType: 'text' as 'json'})
  }

  public welcome(token: string) {
    let tokenStr = "Bearer " + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get("", {headers, responseType: 'text' as 'json'})
  }
}
