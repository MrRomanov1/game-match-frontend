import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSectionComponent } from './match-section.component';

describe('MatchSectionComponent', () => {
  let component: MatchSectionComponent;
  let fixture: ComponentFixture<MatchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
