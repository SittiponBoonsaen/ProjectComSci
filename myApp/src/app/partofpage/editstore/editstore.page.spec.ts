import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditstorePage } from './editstore.page';

describe('EditstorePage', () => {
  let component: EditstorePage;
  let fixture: ComponentFixture<EditstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
