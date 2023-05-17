import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosCardsComponent } from './fotos-cards.component';

describe('FotosCardsComponent', () => {
  let component: FotosCardsComponent;
  let fixture: ComponentFixture<FotosCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotosCardsComponent]
    });
    fixture = TestBed.createComponent(FotosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
