import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:mission-planning-dashboard/src/app/experiments/experiments.component.spec.ts
import { ExperimentsComponent } from './experiments.component';

describe('ExperimentsComponent', () => {
  let component: ExperimentsComponent;
  let fixture: ComponentFixture<ExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsComponent ]
=======
>>>>>>> 4c035bb29399ab83ad8449fd192b08e7e3b43303
import { EquipmentComponent } from './equipment.component';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentComponent ]
<<<<<<< HEAD
=======
>>>>>>> 4c035bb29399ab83ad8449fd192b08e7e3b43303:mission-planning-dashboard/src/app/equipment/equipment.component.spec.ts
>>>>>>> 4c035bb29399ab83ad8449fd192b08e7e3b43303
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(EquipmentComponent);
=======
<<<<<<< HEAD:mission-planning-dashboard/src/app/experiments/experiments.component.spec.ts
    fixture = TestBed.createComponent(ExperimentsComponent);
=======
    fixture = TestBed.createComponent(EquipmentComponent);
>>>>>>> 4c035bb29399ab83ad8449fd192b08e7e3b43303:mission-planning-dashboard/src/app/equipment/equipment.component.spec.ts
>>>>>>> 4c035bb29399ab83ad8449fd192b08e7e3b43303
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
