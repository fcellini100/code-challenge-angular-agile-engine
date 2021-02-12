import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from '../interfaces/photo';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss']
})
export class PhotoDialogComponent implements OnInit {

  photo: Photo;

  constructor(
    public dialogRef: MatDialogRef<PhotoComponent>,
    public photoService: PhotoService,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number
    })
    {
      this.photoService.getPhotoDetails(data.id)
        .subscribe(photo => {
          this.photo = photo;
        })
    }

  ngOnInit() {
  }

  closeDialog(event: any) {
    this.dialogRef.close(event);
  }

}
