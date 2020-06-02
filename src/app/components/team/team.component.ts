import { Component, OnInit } from '@angular/core';
import { faChartLine, faCommentAlt, faCode, faTv, faGripHorizontal} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  public team = [
    {
      image: 'assets/images/team-1.png',
      title: 'Rob Percy',
      position: 'co-founder'
    },
    {
      image: 'assets/images/team-2.png',
      title: 'Jenifer L.',
      position: 'graffic designer'
    },
    {
      image: 'assets/images/team-3.png',
      title: 'Tom Hanks',
      position: 'seo specialist'
    },
    {
      image: 'assets/images/team-4.png',
      title: 'Emma Watson',
      position: 'head of ideas'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
