import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-favorite',
  templateUrl: './modal-favorite.component.html',
  styleUrls: ['./modal-favorite.component.scss']
})
export class ModalFavoriteComponent implements OnInit {

  constructor(private favoriteService: FavoriteService, private modal: NgbModal) { }
  public favoritesList:Array<any> = []
  searchTerm:string;

  ngOnInit(): void {
    this.favoriteService.favoriteTrigger.subscribe( data => {
      this.favoritesList.push(data);
    })
  }

  openModal(content: any) {
    this.modal.open(content, { centered: true });
  }

  removeFavorite(title:any) {
    const index = this.favoritesList.findIndex(item => item.title === title.innerText);
    this.favoritesList.splice( index, 1);
  }
}
