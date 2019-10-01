import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTidbitsComponent } from './code-tidbits.component';

describe('CodeTidbitsComponent', () => {
  let component: CodeTidbitsComponent;
  let fixture: ComponentFixture<CodeTidbitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTidbitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTidbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
