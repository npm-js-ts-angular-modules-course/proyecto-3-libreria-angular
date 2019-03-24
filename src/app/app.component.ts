import { ApiService } from './../../projects/mugan86-youtube-api/src/lib/services/api.service';
import { ModalService } from './../../projects/mugan86-youtube-api/src/lib/services/modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libreriasAngular';

  constructor(private api: ApiService) {}

}
