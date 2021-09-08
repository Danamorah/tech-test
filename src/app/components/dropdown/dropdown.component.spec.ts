import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort by lower price', () => {
    const items = [[{
        price: "640"
      },
      {
        price: "500"
      }
    ]]
    component.sortByLowerPrice(items);
    expect(component).toBeTruthy();
  });

  it('should sort by higher price', () => {
  const items = [[{
      price: "640"
    },
    {
      price: "500"
    }
  ]]
  component.sortByHigherPrice(items);
  expect(component).toBeTruthy();
  });

  it('should sort by text', () => {
  const items = [[{
      title: 'Polaroid 635',
      price: "640"
    },
    {
      title: 'Iphone 6s',
      price: "500"
    },
    {
      title: 'Zapato',
      price: "500"
    },
    {
      title: 'Zapato',
      price: "500"
    }
  ]]
  component.sortByText(items, 'title');
  expect(component).toBeTruthy();
  });
});
