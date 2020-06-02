import { Component, OnInit } from '@angular/core';
import { faCommentAlt, faArrowCircleRight, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  public faCommentAlt = faCommentAlt;
  public faArrowCircleRight = faArrowCircleRight;
  public faLightbulb = faLightbulb;

  public stories = [
    {
      image: 'assets/images/story-1.png',
      title: 'MUSIC for refreshment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a obcaecati consequatur, officia voluptate sint! Neque hic facilis accusantium!'
    },
    {
      image: 'assets/images/story-2.png',
      title: 'We support your custom',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a obcaecati consequatur, officia voluptate sint! Neque hic facilis accusantium!'
    },
    {
      image: 'assets/images/story-3.png',
      title: 'We love photography',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a obcaecati consequatur, officia voluptate sint! Neque hic facilis accusantium!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
