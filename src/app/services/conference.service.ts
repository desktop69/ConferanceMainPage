import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conferance } from '../model/conference.model';
import { Participant } from '../model/Participant.model';



const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )};


@Injectable({
  providedIn: 'root'
})


export class ConferenceService {
  conferanceslist: Conferance[];
  conferance! : Conferance;
  apiURL: string = 'http://localhost:8090/Conference/api';
  apiURLpart: string = 'http://localhost:8090/Conference/api/part';
  apiURLCon: string = 'http://localhost:8090/Conference/con';

  constructor(private http : HttpClient) {
    this.conferanceslist = [];
   }
   
   ListConferance ():Observable<Conferance[]>{
    return this.http.get<Conferance[]>(this.apiURL)
   }

   consulterConference(id: number): Observable<Conferance> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Conferance>(url);
    }


    AddParticipant(part :Participant):Observable<Participant>{
      return this.http.post<Participant>(this.apiURLpart, part , httpOptions)
    }

      /*image functions*/
  
      uploadImage(file : File , filename : string) {

        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURL + "/image/upload"}`
        return this.http.post(url ,imageFormData)
      }
    
    
      loadImage(id : number) {
  
        const url = `${this.apiURL + "/image/get/info"}/${id}`
        return this.http.get(url) ;
      }
    
      deleteImage(idImage : number) {
        const url = `${this.apiURL + "/image/delete"}/${idImage}`
        return this.http.delete(url)
      }
      /******************* */





}  