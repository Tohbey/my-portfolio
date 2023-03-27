import { Component, OnInit } from '@angular/core';
import { WorkHistory, WorkDetail } from "./model/WorkHistory";
import { faFolder} from '@fortawesome/free-regular-svg-icons';
import { Project } from './model/project.model';

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
      work: "HumanManager Limited",
      workDetails: {
        position: "Software Developer",
        timeSpent: "April-2018 - Present",
        workDone: [
          "The incorporation of API services from pouchi and wallency for paying utility bills like those for data, electricity, and airtime.",
          "Implementation of split salary payment for HM flex corporate.",
          "Implementation of KYC update for flex users.",
          "Implementation of single sign-on via Microsoft azure on HM.",
          "Integration of Remita inline for HM flex corporates.",
          "Implementation of Image/Face capture assistant on HM Flex for new and existing customers.",
          "The incorporation of API services from pouchi and wallency for paying utility bills like those for data, electricity, and airtime.",
          "Implementation of split salary payment for HM flex corporate.",
          "Implementation of KYC update for flex users.",
          "Implementation of single sign-on via Microsoft azure on HM.",
          "Integration of Remita inline for HM flex corporates.",
          "Implementation of Image/Face capture assistant on HM Flex for new and existing customers."
        ]
      }
    },
    {
      work: "BrilloConnect",
      workDetails: {
        position: "Fullstack Developer",
        timeSpent: "November-2021 - December-2021",
        workDone: [
          "Worked on API consumption and development and the utilization of various internal router services.",
          "Deployment of the web application's backend, frontend, and database.",
          "Created exceptional UX design, determined backend data display, designed styling, colors, and interface, and optimized website navigation"
        ]
      }
    },
    {
      work: "Exalt",
      workDetails: {
        position: "Backend Developer (Internship)",
        timeSpent: "September-2020 - January 2021",
        workDone: [
          "Wrote unit tests to help reduce the number of bugs in the service.",
          "Developed and deployed REST APIs that were integrated on the front end.",
          "Reviewed code and tested 3 additional features on exalt logistics service."
        ]
      }
    },
    {
      work: "Systemspecs",
      workDetails: {
        position: "Frontend Developer (Internship)",
        timeSpent: "June-2019 - January-2020",
        workDone: [
            "I integrated a paystack payment gateway to simplify checkout procedures.",
            "Implemented Firebase authentication to allow users to sign in with their social media accounts.",
            "Contributed to the development of a Human Capital solution.",
            "Worked on the documentation of the software."
        ]
      }
    }
  ];

  myProjects: Array<Project> = [
    {
      projectName: "E-seating arrangement system",
      projectDescription:"In order to prevent students taking the same exam from sitting next to one another, I created a web application that produces seats for an endless number of students in respective faculties.",
      technologies: ["Java (Spring boot)", "MYSQL", "Angular"]
    },
    {
      projectName: "Sales Point",
      projectDescription:"When you place an order, a food store application that uses the Stripe API for checkout functionality can assist you in determining how many calories you've consumed each day.",
      technologies: ["Nodejs", "MongoDB", "Angular"]
    },
    {
      projectName: "E-seating arrangement system",
      projectDescription:"In order to prevent students taking the same exam from sitting next to one another, I created a web application that produces seats for an endless number of students in respective faculties.",
      technologies: ["Java (Spring boot)", "MYSQL", "Angular"]
    },
    {
      projectName: "Sales Point",
      projectDescription:"When you place an order, a food store application that uses the Stripe API for checkout functionality can assist you in determining how many calories you've consumed each day.",
      technologies: ["Nodejs", "MongoDB", "Angular"]
    }
  ]
}
