import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  @Output()favoriteTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
