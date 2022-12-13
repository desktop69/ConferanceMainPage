import { Component, OnInit } from '@angular/core';
import * as aos from 'aos';
import { Conferance } from '../model/conference.model';
import { ConferenceService } from '../services/conference.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //conferences?: Conferance[];

conferances?: Conferance[];
image: any;
listImages: String[] = [];

  constructor(private conferanceService : ConferenceService ) { }

  ngOnInit(): void{
    aos.init();
    this.chargerConferences();
    
 }

 chargerConferences(){
  this.conferanceService.ListConferance().subscribe(con => {
    console.log(con);
    this.conferances= con;
    for (let index = 0; index < this.conferances.length; index++) {
      this.conferanceService
        .loadImage(this.conferances[index].image.idImage)
        .subscribe((res: any) => {
          //console.log(res.name)
          this.listImages[index] =
            'data:' + res.type + ';base64,' + res.image;
          });
        }
        
      });
}

}
