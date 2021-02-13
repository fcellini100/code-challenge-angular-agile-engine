import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Page } from '../interfaces/page';
import { Photo } from '../interfaces/photo';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {  }

  private PHOTO_LIST = 'http://interview.agileengine.com/images';

  getPhotoList(page: number){
    const pageParam = page > 1 ? `?page=${page}` : '';
    return this.httpClient.get<Page>(`${this.PHOTO_LIST}${pageParam}`); 
  }

  getPhotoDetails(id: number){
    return this.httpClient.get<Photo>(`${this.PHOTO_LIST}/${id}`);
  }
}