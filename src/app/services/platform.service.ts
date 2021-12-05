import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private baseUrl = 'http://localhost:8080/platforms';
  
  constructor(private httpClient: HttpClient) { }

  getPlatformList(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
