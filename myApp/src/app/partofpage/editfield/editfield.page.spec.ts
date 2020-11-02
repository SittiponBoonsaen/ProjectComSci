import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditfieldPage } from './editfield.page';

describe('EditfieldPage', () => {
  let component: EditfieldPage;
  let fixture: ComponentFixture<EditfieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfieldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditfieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
