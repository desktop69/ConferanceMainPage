import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conference } from '../model/conference.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})


export class ConferenceService {
  apiURL: string = 'http://localhost:8090/Conference/api';
 
  constructor(private http : HttpClient) {
  }
  listeConference(): Observable<Conference[]>{
  return this.http.get<Conference[]>(this.apiURL);
  }


  conferences!: Conference[];

  consulterConference(id: number): Observable<Conference> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Conference>(url);
    }
}  