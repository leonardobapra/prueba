import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }
  
  signup(data:Object):Observable<any>{
    return this.http.post(this.API+'/Cliente/signup', data);
  }
  login(data:Object):Observable<any>{
    return this.http.post(this.API+'/Cliente/login', data);
  }
  updateClient(data:Object):Observable<any>{
    return this.http.post(this.API+'/Cliente/update', data, { headers: this.getTokenHeader() });
  }

   deleteClient(data: Object): Observable<any> {
     return this.http.delete(this.API + '/Cliente/eliminar', { headers: this.getTokenHeader() });
  }

  updateReservations(data: Object): Observable<any> {
    return this.http.post(this.API + '/Reservacion/updateR', data, { headers: this.getTokenHeader() });
  }

  getReservations():Observable<any>{
    return this.http.get(this.API+'/Reservacion/history', { headers: this.getTokenHeader() });
  }

  reservation(data: Object): Observable<any> {
    return this.http.post(this.API + '/Reservacion/create', data, { headers: this.getTokenHeader() });
  }

  search(text: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('text', text);

    return this.http.get(this.API + '/Habitacion/search', { params: params });
  }

  filter(data: Object): Observable<any> {
    return this.http.post(this.API + '/Habitacion/filter', data);
  }

  getTokenHeader(){
    let token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

}
