import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mugan86-yt-api-modal-video',
  templateUrl: './modal-video.component.html',
  styles: []
})
export class ModalVideoComponent {

  @Input() title: string;
  @Input() body: string;
  @Input() videoId: string;
  constructor(public modalService: NgbActiveModal) { }

}
