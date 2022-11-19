import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilacuatroComponent } from './filacuatro.component';

describe('FilacuatroComponent', () => {
  let component: FilacuatroComponent;
  let fixture: ComponentFixture<FilacuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilacuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilacuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
