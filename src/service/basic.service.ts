import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class BasicService {
    public constructor(
        protected http: HttpClient){}

        

  public getAllData(): Observable<any> {
    const url = `https://api.deezer.com/artist/27`;
    return this.http.get<any>(url).pipe();
  }
  public searchArtist(search:any): Observable<any> {
    const url = `https://api.deezer.com/search?q=${search}`;
    return this.http.post<any>(url,search).pipe();
  }

  public getDetails(selecteID:number): Observable<any> {
    const url = `https://api.deezer.com/artist/${Number}`;
    return this.http.get<any>(url).pipe();
  }
}