import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density"
  ]

  selectedExperiment: string = ""

  constructor() { }

  ngOnInit() {
  }

  add(experiment:string) {
    if(!this.experiments.includes(experiment)) {
      this.experiments.push(experiment)
    }
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index,1)
  }

  edit(experiment:string) {
    this.selectedExperiment = experiment
  }

  save(experiment: string, editedExperiment: string){
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index,1,editedExperiment)
  }
}
