import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistContainerComponent } from './component/artist-container/artist-container.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistDetailComponent } from './component/artist-detail/artist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistContainerComponent,
    ArtistDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
