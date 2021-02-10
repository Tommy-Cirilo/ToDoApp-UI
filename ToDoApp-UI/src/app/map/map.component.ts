import { Component, OnInit } from '@angular/core';
import { MapServiceService } from '../map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public maps: MapServiceService) { }

  ngOnInit() {
    this.maps.buildMap();
  }

}
