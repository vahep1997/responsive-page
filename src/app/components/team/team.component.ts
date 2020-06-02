import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team = [
    {
      image: 'assets/images/team-1.png',
      name: 'Rob Percy',
      position: 'co-founder'
    },
    {
      image: 'assets/images/team-2.png',
      name: 'Jenifer L.',
      position: 'graffic designer'
    },
    {
      image: 'assets/images/team-3.png',
      name: 'Tom Hanks',
      position: 'seo specialist'
    },
    {
      image: 'assets/images/team-4.png',
      name: 'Emma Watson',
      position: 'head of ideas'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
