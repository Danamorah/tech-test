import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input ()itemsToSort: any
  constructor(){
  }


  sortByLowerPrice(items: any): void {
    items[0].sort((a:any, b:any) => Number(a.price) - Number(b.price));
  }

  sortByHigherPrice(items: any) {
    items[0].sort((a:any, b:any) => Number(b.price) - Number(a.price));
  }

  sortByText(items: any, attr:string) {
    items[0].sort((a:any, b:any)=> {
      if (a[attr].toLowerCase() < b[attr].toLowerCase()){
        return -1
      }
      else if(a[attr].toLowerCase() > b[attr].toLowerCase()){
        return  1
      }
      return 0
    })
  }
}
