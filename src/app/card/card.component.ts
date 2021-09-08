import { Component, Input } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input ()entryItem: any;
  public image:string = '';

  constructor(private favoriteService: FavoriteService) { }


  addFavorite(){
    this.favoriteService.favoriteTrigger.emit(
      {
        image: this.entryItem.image,
        title: this.entryItem.title,
      }
    )
  }
}
