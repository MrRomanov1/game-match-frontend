import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  
  constructor(private httpClient: HttpClient) { }

  getPlatformList(): Observable<any> {
    return this.httpClient.get(Constants.PLATFORMS_SERVICE_URL);
  }
}
