import { Mugan86YoutubeApiModule } from './../../projects/mugan86-youtube-api/src/lib/mugan86-youtube-api.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Mugan86YoutubeApiModule.forRoot({
      apiKey: environment.apiKey,
      showLog: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
