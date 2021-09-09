import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  const entryItem = {
      title: 'Polaroid 635',
  };

  const favoritesList = [{
      title: 'Iphone 6',
  }];

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.entryItem = entryItem;
    component.favoritesList = favoritesList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
  const titleElement: HTMLElement = fixture.nativeElement;
  const p = titleElement.querySelector('h6')!;
  expect(p.textContent).toEqual('Polaroid 635');
  });

  it('should add to favorites', () => {
    spyOn(component, 'addFavorite').and.callThrough();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.addFavorite).toHaveBeenCalled();
  });
});
