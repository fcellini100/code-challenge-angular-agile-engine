import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../interfaces/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo: Photo;
  
  constructor() { }

  ngOnInit() {
  }

}
