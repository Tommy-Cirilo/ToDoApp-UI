import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  map: mapboxgl.Map | null;
  // map: mapboxgl.Map;

  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 45.32;
  lon = 23.23;
  zoom = 12;


  constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    // this.map = new mapboxgl.Map;
   }

   buildMap() {
     this.map = new mapboxgl.Map ({ 
       container: 'map', 
       style: this.style, 
       zoom: this.zoom, 
       center: [this.lon, this.lat]
      })
      this.map.addControl (new mapboxgl.NavigationControl())
   }

   

}
