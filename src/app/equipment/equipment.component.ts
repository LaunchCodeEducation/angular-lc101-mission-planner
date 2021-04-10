import { Component, OnInit } from '@angular/core';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[]= [
    "Habitat dome",
    "Drones",
    "Food containers",
    "Oxygen tanks"
  ]

  itemBeingEdited: string = ""

  constructor() { }

  ngOnInit() {
  }

  add(newItem:string) {
    if(!this.equipment.includes(newItem)){
    this.equipment.push(newItem)
    }
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index,1);
  }

  edit(item: string) {
    this.itemBeingEdited = item
  }

  save (editItem: string, item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index,1,editItem);
    this.itemBeingEdited = ""
  }

}

