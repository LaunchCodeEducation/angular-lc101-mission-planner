import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css', '../app.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  added: string[] =[];
   constructor() { }

   ngOnInit() { }
addExperiment(experiment){
  if(this.added.length<3){
    this.added.push(experiment);
    }
  }
  removeExperiment(expAdded){
    let index = this.added.indexOf(expAdded);
    this.added.splice(index, 1);
  }
}
