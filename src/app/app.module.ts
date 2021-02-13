import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';
import { PhotoDialogComponent } from './photo-dialog/photo-dialog.component';
import { MatButtonModule, MatDialogModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { TokenInterceptor } from './services/token-interceptor';
import { PaginatorComponent } from './paginator/paginator.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoThumbnailComponent,
    PhotoDialogComponent,
    PhotoComponent,
    PaginatorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [PhotoDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
