import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {
   }

   public getJson(): Observable<any>{
     return this.http.get('./assets/menu.json');
   }
}
