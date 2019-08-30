import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 1},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 100},
       {name: 'Oxygen Tanks', mass: 500},
       {name: 'AE-35 Unit', mass: 50},
       {name: 'Parrot', mass: 2}
   ];
   cargoHold: object[] = [];
   totalMass: number = 0;

   constructor() { }

   ngOnInit() { }

   addItem(item : object) : boolean {
      this.cargoHold.push(item);
      this.totalMass += item['mass'];
      return this.totalMass >= 500;
   }
}
