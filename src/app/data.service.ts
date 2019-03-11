import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getRequest(): Observable<any> {
    return this.http.get<any>('/api/comments');
  }
}
