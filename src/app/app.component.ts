import {Component, Inject, PLATFORM_ID} from '@angular/core';
import { faFolder} from '@fortawesome/free-regular-svg-icons';
import {WorkDetail, WorkHistory} from "./model/WorkHistory";
import {Project} from "./model/project.model";
import {faGit, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {Title} from "@angular/platform-browser";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {ActivatedRoute, NavigationEnd, Router, RouterState} from "@angular/router";
import {fromEvent, Observable, Subscription} from "rxjs";
import {AlertService} from "./service/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profoilo';
  index!: number;
  currentWorkDetail!: WorkDetail;
  currentWorkPlace!: string;
  folderIcon = faFolder;
  wwwIcon = faGlobe;
  twitterIcon = faTwitter;
  mailIcon = faEnvelope;
  gitIcon = faGit;
  linkedinIcon = faLinkedinIn;
  twitter: string = "https://twitter.com/tobey_fafo";
  mail: string = "mailto:fafoworatobi25@gmail.com";
  github: string = "https://github.com/Tohbey";
  linkedin: string = "https://www.linkedin.com/in/fafowora-oluwatobiloba-950091167/";
  onlineEvent: Observable<Event> | undefined;
  offlineEvent: Observable<Event> | undefined;
  subscription = new Subscription();

  ngOnInit() {
    this.index = 0;
    this.currentWorkDetail = this.workPositions[0].workDetails;
    this.currentWorkPlace = this.workPositions[0].work;

    if(isPlatformBrowser(this.platformId)){
      this.onlineEvent = fromEvent(window, 'online');
      this.offlineEvent = fromEvent(window, 'offline');

      this.subscription.add(
        this.onlineEvent.subscribe(() => {
          console.log("online")
          this.alert.showSuccess('You are back online', 'Connectivity');
          this.router.navigate(['/'])
        })
      )

      this.subscription.add(
        this.offlineEvent.subscribe(() => {
          console.log("offline")
          this.alert.showError('Your device is currently offline', 'Connectivity');
        })
      )
    }
  }

  constructor(private router: Router, private titleService: Title,
              @Inject(DOCUMENT) private document:Document,
              @Inject(PLATFORM_ID) private platformId: Object,
              private alert: AlertService,) {
    this.handleRouteEvents();
  }

  changeWorkPlace(i: number) {
    if (i <= this.workPositions.length) {
      this.currentWorkDetail = this.workPositions[i].workDetails;
      this.currentWorkPlace = this.workPositions[i].work;
    }
  }

  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        this.titleService.setTitle(title);
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href
        })
      }
    });
  }

  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }
    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }
    return data;
  }

  workPositions: Array<WorkHistory> = [
    {
      work: "HumanManager Limited",
      workDetails: {
        position: "Software Developer",
        timeSpent: "April-2022 - Present",
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
          "Implementation of Image/Face capture assistant on HM Flex for new and existing customers.",
          "Implementation of take a loan process for HM web.",
          "Implementation of Creation of partner and partner dashboard.",
          "Implementation of partner report.",
          "Bug fixes on African environment.",
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
      projectDescription:"A web application that generates seating arrangements for an unlimited number of students in "+
        "their respective faculties, ensuring that students taking the same exam do not sit next to each other. This "+
        "is particularly important during the COVID-19 pandemic to minimize the risk of virus transmission among students.",
      technologies: ["Java (Spring boot)", "MYSQL", "Angular"],
      link: "https://e-seatingarrangment.netlify.app/home"
    },
    {
      projectName: "Sales Point",
      projectDescription:"A food store application that integrates with the Stripe API to enable users to track their daily " +
        "caloric intake when placing an order. This feature is intended to help users make informed decisions " +
        "about their dietary choices and maintain a healthy lifestyle",
      technologies: ["Nodejs", "MongoDB", "Angular"],
      link:"https://sales-point.netlify.app/home"
    },
    {
      projectName: "HumanManager",
      projectDescription:"An all-in-one HR solution that helps organization with all their HR needs such as payroll, leave, " +
        "staff record, expense, performance and learning management. It is a technology powerhouse specializing in data management, " +
        "HR, payroll, and employee journey automation",
      link:"https://humanmanager.net/"
    },
    {
      projectName: "ExaltCourier",
      projectDescription:"An app that goes where no other logistics app has ever gone before. It offers a seamless way for you to manage all " +
        "your shipments and more. The mobile application boasts a simple and user friendly interface that makes navigation effortless " +
        "and user understanding of it’s functions easy.",
      link: "https://play.google.com/store/apps/details?id=com.userlogistics&hl=en_GB&gl=US&pli=1"
    }
  ]
}
