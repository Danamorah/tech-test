import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsUrl = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';
  searchOption:any =[]

  constructor(private http: HttpClient) { }

  public getItems() {
    return this.http.get(this.itemsUrl).pipe (
      catchError(async (err) => console.error(err))
    );
  }
}
