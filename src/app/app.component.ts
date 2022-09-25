import { Component, OnInit } from '@angular/core';
import { WorkHistory, WorkDetail } from "./model/WorkHistory";
import { faFolder} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  index!: number;
  currentWorkDetail!: WorkDetail;
  currentWorkPlace!: string;
  folderIcon = faFolder;

  ngOnInit() {
    this.index = 0;
    this.currentWorkDetail = this.workPositions[0].workDetails;
    this.currentWorkPlace = this.workPositions[0].work
  }

  changeWorkPlace(i: number) {
    if (i <= this.workPositions.length) {
      this.currentWorkDetail = this.workPositions[i].workDetails;
      this.currentWorkPlace = this.workPositions[i].work;
    }
  }

  workPositions: Array<WorkHistory> = [
    {
      work: "Apple",
      workDetails: {
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
      work: "Google",
      workDetails: {
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
      work: "Goldman",
      workDetails: {
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
      work: "Systemspecs",
      workDetails: {
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
      work: "BrilloConnect",
      workDetails: {
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
      work: "Systemspecs",
      workDetails: {
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
