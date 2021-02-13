import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Page } from 'src/app/interfaces/page';
import { Thumbnail } from 'src/app/interfaces/thumbnail';
import { Photo } from '../interfaces/photo';
import { PhotoDialogComponent } from '../photo-dialog/photo-dialog.component';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  
  thumbnailList: Thumbnail[];
  hasMore: boolean;
  page: number | null;
  loading: boolean;

  constructor(
    private photoService: PhotoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPhotos(1);
  }

  getPhotos(page) {
    this.loading = true;
    this.thumbnailList = [];
    this.photoService.getPhotoList(page).subscribe((response: Page) => {
      this.thumbnailList = response.pictures;
      this.hasMore = response.hasMore;
      this.page = response.page;
      this.loading = false;
    });
  }

  thumbnailClicked(id: number) {
    this.dialog.open(PhotoDialogComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '80vw',
      data: { id }
    });
  }
}