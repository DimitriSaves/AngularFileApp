import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss']
})
export class TabPageComponent {


  stateSnaps!: boolean;
  buttonText!: string;


  constructor(private router: Router){

  }
  NomColonne = [
    {
      id: 'id',
      title: 'title',
      description: 'description',
      imageUrl: 'imageUrl',
      createdDate: 'date',
      snaps: 'Snaps',
      location: 'location'
    }
   ];
 
}
