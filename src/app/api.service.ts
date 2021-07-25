import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  static readonly api: string = '/api';

  getURL(path: string): string {
    return `${ApiService.api}/${path}`;
  }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(this.getURL(path)).pipe(take(1));
  }
}
