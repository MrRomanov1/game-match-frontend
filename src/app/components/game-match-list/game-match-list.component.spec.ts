import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMatchListComponent } from './game-match-list.component';

describe('GameMatchListComponent', () => {
  let component: GameMatchListComponent;
  let fixture: ComponentFixture<GameMatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMatchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
