import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core';
import { Directive,  Input} from '@angular/core';

import { CoordinateModel } from '../models/coordinate.model';

declare var google: any;

@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin: CoordinateModel;
  @Input() destination: CoordinateModel;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
              // Start/Finish icons
              var icons = {
                start: new google.maps.MarkerImage(
                // URL
                '/app/assets/images/marker.png',
                // (width,height)
                new google.maps.Size( 44, 32 ),
                // The origin point (x,y)
                new google.maps.Point( 0, 0 ),
                // The anchor point (x,y)
                new google.maps.Point( 22, 32 )
                ),
                end: new google.maps.MarkerImage(
                // URL
                '/app/assets/images/marker.png',
                // (width,height)
                new google.maps.Size( 44, 32 ),
                // The origin point (x,y)
                new google.maps.Point( 0, 0 ),
                // The anchor point (x,y)
                new google.maps.Point( 22, 32 )
                )
              };
              function makeMarker( position, icon, title ) {
                  new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: icon,
                    title: title
                  });
              }
              var directionsService = new google.maps.DirectionsService;
              var directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: {strokeColor: "#00A69C"} });
              directionsDisplay.setMap(map);
              directionsDisplay.setOptions({ suppressMarkers: true });
              directionsService.route({
                      origin: {lat: this.origin.lat, lng: this.origin.lng},
                      destination: {lat: this.destination.lat, lng: this.destination.lng},
                      waypoints: [],
                      optimizeWaypoints: true,
                      travelMode: 'DRIVING'
                    }, function(response, status) {
                                if (status === 'OK') {
                                  directionsDisplay.setDirections(response);
                                  var leg = response.routes[ 0 ].legs[ 0 ];
                                  makeMarker( leg.start_location, icons.start, "title" );
                                  makeMarker( leg.end_location, icons.end, 'title' );
              
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });

    });
  }
}