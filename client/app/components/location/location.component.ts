import {Component,OnInit,Injectable,EventEmitter} from '@angular/core';

import {LocationService} from '../../services/location.service';
import {EmitterService} from '../../services/emitter.service';

import {Location} from './location-interface';

@Component({
  selector: 'ngLocation',
  template:
  `
  <div>
    <h3> The magic of internet says that you are in: {{selectedCity}} </h3>
  </div>
  `,
  styleUrls: ['app/components/ng2-location/location.css'],
})

export class LocationComponent implements OnInit {
  /**
  The selectedCity property is used to show the current city name.
  */
  public selectedCity: string;
  constructor(private _location: LocationService) {}

  ngOnInit(){
  window.localStorage.removeItem("city");
  this._location.getCitydata();
  EmitterService.get("selectedCity")
    .subscribe(data =>{
      this.selectedCity = data;
      localStorage.setItem('city', data);
    });
  this.selectedCity = window.localStorage.getItem('city');
  }   
}
