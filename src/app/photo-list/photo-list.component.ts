import { Component, OnInit } from '@angular/core';
import { Page } from 'src/interfaces/page';
import { Thumbnail } from 'src/interfaces/thumbnail';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  MOCK_RESPOSE: Page = {
    pictures: [
        {
            id: "90322bc9cd20fd0f4ffa",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/0002.jpg"
        },
        {
            id: "d8b093f6ad76844e959d",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/0015.jpg"
        },
        {
            id: "3fade8d556d8dcc5e5ec",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/0019.jpg"
        },
        {
            id: "82245459e53513c81f94",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/0020.jpg"
        },
        {
            id: "ee43d22f958bf61ce646",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/005.jpg"
        },
        {
            id: "491a0b7ef93d941349c0",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/01.jpg"
        },
        {
            id: "f6d13be47001d89bf499",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/011129columbus1-01.jpg"
        },
        {
            id: "fa821d5f4999c6962df9",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/018086b.jpg"
        },
        {
            id: "5447e61703d03de819d2",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/01sc087.jpg"
        },
        {
            id: "bb4b70f753da38dc1037",
            cropped_picture: "http://interview.agileengine.com/pictures/cropped/02sc003.jpg"
        }
    ],
    page: 1,
    pageCount: 26,
    hasMore: true
  };

  thumbnailList: Thumbnail[];

  constructor() { }

  ngOnInit() {
    this.thumbnailList = this.MOCK_RESPOSE.pictures;
  }

  thumbnailClicked(id: number) {
    alert("You clicked " + id);
  }

}
