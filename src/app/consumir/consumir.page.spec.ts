import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumirPage } from './consumir.page';

describe('ConsumirPage', () => {
  let component: ConsumirPage;
  let fixture: ComponentFixture<ConsumirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
