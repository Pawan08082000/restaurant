import { Injectable } from '@angular/core';

const ITEM_KEY = 'selected-items';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  public setItem(item: any) {
    var data = JSON.parse(localStorage.getItem(ITEM_KEY) || '[]');
    data.push(item);
    localStorage.setItem(ITEM_KEY, JSON.stringify(data));
  }

  public getItem(): string | null {
    console.log(window.localStorage.getItem(ITEM_KEY));
    return window.localStorage.getItem(ITEM_KEY);
  }

  public deleteItem() {
    localStorage.removeItem(ITEM_KEY);
  }

  public numberOfItems(){
    var data = JSON.parse(localStorage.getItem(ITEM_KEY) || '[]');
    return data.length
  }
}
