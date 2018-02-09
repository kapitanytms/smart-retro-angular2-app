import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retro-wall',
  templateUrl: './retro-wall.component.html',
  styleUrls: ['./retro-wall.component.scss']
})
export class RetroWallComponent implements OnInit {

  title1 = 'Amik jól mentek';
  title2 = 'Amiken javítani kell';
  title3 = 'Intézkedési tételek';
  id1 = '1';
  id2 = '2';
  id3 = '3';
  constructor() { }

  ngOnInit() {
  }
}
