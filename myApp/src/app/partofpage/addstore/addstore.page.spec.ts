import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddstorePage } from './addstore.page';

describe('AddstorePage', () => {
  let component: AddstorePage;
  let fixture: ComponentFixture<AddstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
