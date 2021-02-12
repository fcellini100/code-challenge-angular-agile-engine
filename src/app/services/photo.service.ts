import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Page } from '../interfaces/page';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {
  }

  private PHOTO_LIST = 'http://interview.agileengine.com/images';

  getPhotoList(){
    return this.httpClient.get<Page>(this.PHOTO_LIST)
      .pipe(
        map((response) => response.pictures)
      );
  }
}