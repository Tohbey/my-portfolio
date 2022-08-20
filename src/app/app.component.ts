import { Component } from '@angular/core';
import {WorkHistory} from "./model/WorkHistory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  workPositions:Array<WorkHistory> = [
    {
      work:"Apple",
      workDetails:{
        position: "Engineer",
        timeSpent: "May-2018 - Present",
        workDone: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects"
        ]
      }
    },
    {
      work:"Google",
      workDetails:{
        position: "Engineer",
        timeSpent: "May-2018 - Present",
        workDone: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects"
        ]
      }
    },
    {
      work:"Goldman",
      workDetails:{
        position: "Engineer",
        timeSpent: "May-2018 - Present",
        workDone: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects"
        ]
      }
    },
    {
      work:"Systemspecs",
      workDetails:{
        position: "Engineer",
        timeSpent: "May-2018 - Present",
        workDone: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects"
        ]
      }
    },
    {
      work:"BrilloConnect",
      workDetails:{
        position: "Engineer",
        timeSpent: "May-2018 - Present",
        workDone: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects"
        ]
      }
    },
    {
      work:"Systemspecs",
      workDetails:{
        position: "Engineer",
        timeSpent: "May-2018 - Present",
        workDone: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Write modern, performant, maintainable code for a diverse array of client and internal projects"
        ]
      }
    }
  ];

}
