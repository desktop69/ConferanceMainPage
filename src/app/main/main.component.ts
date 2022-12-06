import { Component, OnInit } from '@angular/core';
import * as aos from 'aos';
import { Conference } from '../model/conference.model';
import { ConferenceService } from '../services/conference.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  conferences?: Conference[];

  constructor(private conferenceService : ConferenceService ) { }

  ngOnInit(): void{
    aos.init();
    this.chargerConferences();
    
 }

 chargerConferences(){
 this.conferenceService.listeConference().subscribe(confs => {
  console.log(confs);
  this.conferences = confs;
  });}

}
