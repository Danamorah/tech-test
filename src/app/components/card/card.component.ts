import { Component, Input } from '@angular/core';
import { FavoriteService } from '../../core/services/favorite-service/favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input ()entryItem: any;
  @Input ()favoritesList: any;
  public image:string = '';

  constructor(private favoriteService: FavoriteService) { }


  checkFavorite = (elem:any) => elem.title === this.entryItem.title
  addFavorite(){
    this.favoriteService.favoriteTrigger.emit(
      {
        image: this.entryItem.image,
        title: this.entryItem.title,
      }
    )
  }
}
