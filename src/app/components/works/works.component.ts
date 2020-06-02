import { Component, OnInit } from '@angular/core';
import { faCheck, faClock, faGlobeAmericas, faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public faCheck = faCheck;
  public faClock = faClock;
  public faGlobeAmericas = faGlobeAmericas;
  public faLaptop = faLaptop;

  public works = [
    { icon: faCheck,
      count: 768,
      text: 'Project Delivered'
    },
    { icon: faClock,
      count: 900,
      text: 'Working Hours'
    },
    { icon: faLaptop,
      count: 215,
      text: 'Work Station'
    },
    { icon: faLaptop,
      count: 553,
      text: 'International Clients'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
