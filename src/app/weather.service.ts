import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { environment } from './environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = environment.apiUrl
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units','metric')
      .set('q',city)
      .set('appId',this.apiKey);
      return this.http.get<Weather>(this.apiUrl+'weather', {params: options})
  }

}
