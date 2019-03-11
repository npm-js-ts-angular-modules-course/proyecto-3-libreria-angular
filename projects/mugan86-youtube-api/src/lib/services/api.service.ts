import { Channel } from './../interfaces/api/channel.interface';
import { map } from 'rxjs/operators';
import { API } from './../constants/urls';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Canal info
  // /channels?part=id%2Csnippet%2CcontentDetails&id=UCTh7-deUJBNv2tHRiMGcXxg&key=
  // PLay list de usuario X
  // /playlists?part=id%2Csnippet%2CcontentDetails&channelId=UCTh7-deUJBNv2tHRiMGcXxg&pageToken=CAUQAA&key=[YOUR_API_KEY]
  // Items de un play list
  // playlistItems?part=id%2Csnippet%2CcontentDetails&playlistId=PLaaTcPGicjqiyuOFrie6fXVyUGJNp9yFe&key=[YOUR_API_KEY]
  constructor(private config: ConfigService, private http: HttpClient) { }

  private getUrl(request: string): string {
    return `${API}${ request }&maxResults=9&key=${this.config.apiKey}`;
  }

  getUserChannelInfo( user: string ) {
    return this.http.get(this.getUrl(`channels?part=id%2Csnippet%2CcontentDetails&id=${ user }`)).pipe(
      map(
        ( res: Channel ) => {
          return res.items[0].snippet;
        }
      )
    );
  }

}
