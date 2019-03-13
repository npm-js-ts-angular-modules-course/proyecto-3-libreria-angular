import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/api/playlis-items.interface';

@Component({
  selector: 'mugan86-yt-api-playlist-items',
  templateUrl: './playlist-items.component.html',
  styles: []
})
export class PlaylistItemsComponent implements OnInit {
  @Input() playlistId: string;
  videos: Item[];
  noMoreVideos = false;
  constructor(private api: ApiService) { }

  ngOnInit() {
    if (this.playlistId === undefined || this.playlistId === null || this.playlistId === '') {
      this.playlistId = 'UUTh7-deUJBNv2tHRiMGcXxg';
    }
    this.loadData();
  }

  loadData(loadMore: boolean = false) {

    if ( this.api.pageToken === 'OK') {
      this.noMoreVideos = true;
      console.log('No hay más videos en este playlist');
    }
    // Cargar los datos
    this.api.getItemsByPlaylist(this.playlistId, loadMore).subscribe(
      (items: Item[]) => {
        this.videos = items;
        console.log(this.videos);
      }
    );
  }

  loadMore() {
    this.loadData(true);
  }

}
