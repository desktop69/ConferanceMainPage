import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conferance } from '../model/conference.model';
import { Participant } from '../model/Participant.model';

import { ConferenceService } from '../services/conference.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  currentConference = new Conferance();
  newpart = new Participant();

  conferances?: Conferance[];
image: any;
listImages: String[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private conferenceService : ConferenceService) { 

  }

  ngOnInit(): void {
  this.chargerDetai();

  this.conferenceService.consulterConference(this.activatedRoute.snapshot.params['id']).
  subscribe( conference =>{ this.currentConference = conference; } ) ;
  }


  chargerDetai(){
    this.conferenceService.ListConferance().subscribe(con => {
      
      this.conferances= con;
      for (let index = 0; index < this.conferances.length; index++) {
        this.conferenceService
          .loadImage(this.conferances[index].image.idImage)
          .subscribe((res: any) => {
            //console.log(res.name)
            this.listImages[index] =
              'data:' + res.type + ';base64,' + res.image;
            });
          }
          console.log(this.conferances)
        });
      }

      addParticipant(){
        this.conferenceService.AddParticipant(this.newpart)
        .subscribe(par => {
        console.log(par);
        this.router.navigate(['']);
        });
        }
    


  }


