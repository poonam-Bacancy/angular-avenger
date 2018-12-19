import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerShowComponent } from './avenger-show.component';

describe('AvengerShowComponent', () => {
  let component: AvengerShowComponent;
  let fixture: ComponentFixture<AvengerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
