import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conference } from '../model/conference.model';
import { ConferenceService } from '../services/conference.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  currentConference = new Conference();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private conferenceService : ConferenceService) { 

  }

  ngOnInit(): void {
    this.conferenceService.consulterConference(this.activatedRoute.snapshot.params['id']).
 subscribe( conference =>{ this.currentConference = conference; } ) ;
  }

}
