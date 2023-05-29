import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessClockComponent } from './chess-clock.component';

describe('ChessClockComponent', () => {
  let component: ChessClockComponent;
  let fixture: ComponentFixture<ChessClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
