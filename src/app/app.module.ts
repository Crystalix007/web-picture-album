import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpandablePictureComponent } from './expandable-picture/expandable-picture.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FullScreenComponent } from './expandable-picture/full-screen/full-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandablePictureComponent,
    GalleryComponent,
    FullScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
