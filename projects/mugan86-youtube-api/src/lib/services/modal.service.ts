import { ModalVideoComponent } from './../components/modal-video/modal-video.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: NgbModal) { }

  show(videoId: string) {
    const modalRef = this.modal.open(ModalVideoComponent);
    modalRef.componentInstance.title = 'Mi video';
    modalRef.componentInstance.body = 'Mi video';
    modalRef.componentInstance.videoId = 'Mi video';
  }
}
