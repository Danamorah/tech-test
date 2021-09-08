import { Component, OnInit, Output } from '@angular/core';
import { ItemsService } from './core/services/items-service/items.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'wallapop-spa';

  public listItems:any = [];
  public loadList: any = []
  public listItemsLength: any;
  public favoritesList:Array<any> = []
  public searchTerm:string;

  constructor(private ItemsService: ItemsService,){

  }



  ngOnInit(): void {
    this.getItems();
  }

  public getItems() {
    this.ItemsService.getItems()
    .subscribe( (response) => {
      this.listItems = response;
      this.listItemsLength = this.listItems.items.length;
      this.loadList = this.listItems.items.slice(0,5)
    },
  error => { console.log(error)}
  );
  }

  public loadMore() {
    const nextPage = this.loadList.length
    this.loadList.push(...this.listItems.items.slice(nextPage, nextPage + 5))
  }
}