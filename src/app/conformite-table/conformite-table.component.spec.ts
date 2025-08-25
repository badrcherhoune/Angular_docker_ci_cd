import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformiteTableComponent } from './conformite-table.component';

describe('ConformiteTableComponent', () => {
  let component: ConformiteTableComponent;
  let fixture: ComponentFixture<ConformiteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConformiteTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformiteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
