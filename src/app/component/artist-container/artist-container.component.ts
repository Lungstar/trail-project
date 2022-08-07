import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-container',
  templateUrl: './artist-container.component.html',
  styleUrls: ['./artist-container.component.scss']
})
export class ArtistContainerComponent implements OnInit {

  @Input() name: any;
  @Input() year: any;
  @Input() Album: any;
  @Input() image: any;

  constructor() { }

  ngOnInit(): void {

  }

}
