import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-favorite',
  templateUrl: './modal-favorite.component.html',
  styleUrls: ['./modal-favorite.component.scss']
})
export class ModalFavoriteComponent {

  constructor(private modal: NgbModal) { }
  @Input() favoritesList:Array<any> = []
  searchTerm:string;


  openModal(content: any) {
    this.modal.open(content, { centered: true });
  }

  removeFavorite(title:any) {
    const index = this.favoritesList.findIndex(item => item.title === title.innerText);
    this.favoritesList.splice( index, 1);
  }
}
