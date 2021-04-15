import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   plannedExperiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density'];

   constructor() { }

   ngOnInit() { }

}
