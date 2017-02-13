import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';

import {Location} from '../components/location/location-interface';
import {EmitterService} from './emitter.service';

import {CoordinateModel} from '../models/coordinate.model';
/**
The {{#crossLink "GeolocationService"}}{{/crossLink}} class ,for getting  city name using HTML geolocation.
**/
@Injectable()
export class LocationService {
  /**
  The location property is used to store location object in localStorage.
  */
  public location: Location ;
  constructor( public http: Http) {}
  /**
  *The getCitydata function is intended to check wheather location is selected or not.
  * It if checks the 'city' parameter of localStorage exixts.
  * If true the location i.e city is set into the headers else 'navigator.geolocation.getCurrentPosition()' method is called to get browser location.
  * @method getCitydata
  */
  getCitydata() {
    // let localCity = localStorage.getItem('city');
    // if([null, undefined, ""].indexOf(localCity,0) != -1){
    navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback,this.options);
    // }
    // else{// do something when you already have the location
    // }
  }

  getCoordinates(callback:any) {
    // let localCity = localStorage.getItem('city');
    // if([null, undefined, ""].indexOf(localCity,0) != -1){
    navigator.geolocation.getCurrentPosition(callback,this.errorCallback,this.options);
    // }
    // else{// do something when you already have the location
    // }
  }

  /**
  * The displayLocation function is intended to get city name from browser location.
  * Google map's API is requested and the response is the json of the full address which is reduced to get the city name.
  * {location} is stored into localStorage as 'location' and city name is emitted as 'selectedCity' using EmitterService.
  */
  displayLocation = (latitude,longitude) => {
    this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true')
        .subscribe(
          response => {
            if(response.status == 200){
              let data = response.json();
              console.log(data);
              location['address'] =  data.results[0].formatted_address;
              let city = data.results[0].address_components.reduce((city, value) => {
                      if(value.types[0] == "locality"){
                          city = value.long_name;
                          location['city'] = city;
                        }
                      if(value.types[0] == "postal_code"){
                          let postal_code = value.long_name;
                          location['postal_code'] = postal_code;
                      }
                      return city;
                    }, '');
                }
              localStorage.setItem('location', JSON.stringify(location));
              EmitterService.get("selectedCity").emit(location['city']);

        },
          error => {
          alert(error.text());
        }
        );
      };

  successCallback = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    return <CoordinateModel>{
      lat:latitude,
      lng:longitude  
    };
    // location['latitude'] = latitude;
    // location['longitude'] = longitude;
    // this.displayLocation(latitude,longitude);
  }

  errorCallback = (error) => {
    let errorMessage = 'Unknown error';
    switch(error.code) {
      case 1:
        errorMessage = 'Permission denied';
        break;
      case 2:
        errorMessage = 'Position unavailable';
        break;
      case 3:
        errorMessage = 'Timeout';
        break;
    }
    console.log(errorMessage);
  };

  options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
  };
}