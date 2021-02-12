import { Component, Input, OnInit } from '@angular/core';
import { Thumbnail } from 'src/interfaces/thumbnail';

@Component({
  selector: 'app-photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.scss']
})
export class PhotoThumbnailComponent implements OnInit {

  @Input() thumbnail: Thumbnail;
  
  constructor() { }

  ngOnInit() {
  }

}
