import { Component, Input } from '@angular/core';
import { FavoriteService } from '../../core/services/favorite-service/favorite.service';
import { ModalFavoriteComponent } from '../modal-favorite/modal-favorite.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input ()entryItem: any;
  @Input ()favoriteList: any;
  public image:string = '';

  constructor(private favoriteService: FavoriteService) { }


  ngOnInit(): void {
    console.log("fav", this.favoriteList)
  }

  addFavorite(){
    this.favoriteService.favoriteTrigger.emit(
      {
        image: this.entryItem.image,
        title: this.entryItem.title,
      }
    )
  }
}
