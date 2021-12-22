import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRecordPageComponent } from './game-record-page.component';

describe('GameRecordPageComponent', () => {
  let component: GameRecordPageComponent;
  let fixture: ComponentFixture<GameRecordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRecordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
