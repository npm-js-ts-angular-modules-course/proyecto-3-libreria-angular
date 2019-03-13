import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/api/playlis-items.interface';

@Component({
  selector: 'mugan86-yt-api-playlist-items',
  templateUrl: './playlist-items.component.html',
  styles: []
})
export class PlaylistItemsComponent implements OnInit {

  playlist = 'UUTh7-deUJBNv2tHRiMGcXxg';
  videos: Item[];
  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getItemsByPlaylist(this.playlist).subscribe(
      (data: Item[]) => {
        console.log(data);
        this.videos = data;
      }
    );
  }

}
