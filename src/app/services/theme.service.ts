import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }

  getThemesList(): Observable<any> {
    return this.httpClient.get(Constants.THEMES_SERVICE_URL);
  }
}