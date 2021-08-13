import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css','../app.component.css']

})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   buttonDisabled: boolean = false;
   active: boolean = true;
   nearCapacity: boolean = false;
   

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item){
     if(this.cargoHold.length<this.maxItems && this.cargoMass+item.mass<2000) {
      this.cargoHold.push(item);
      this.cargoMass += item.mass;
      if(this.cargoMass>=1800){
        this.nearCapacity = true;
      }
     }
    else if(this.cargoHold.length>this.maxItems-1){
      this.buttonDisabled = true;
      alert(`Cargo Hold full`);
    }
   }
   emptyHold(){
     this.cargoHold = [];
     this.cargoMass = 0;
   }
   removeItem(equipment){
      let index = this.cargoHold.indexOf(equipment);
      this.cargoHold.splice(index, 1);
    }

}
