import { Component, OnInit } from '@angular/core';
import { faFingerprint, faChartLine, faCommentAlt, faCode, faTv, faGripHorizontal} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public faChartLine = faChartLine;
  public faGripHorizontal = faGripHorizontal;
  public faFingerprint = faFingerprint;
  public faCommentAlt = faCommentAlt;
  public faCode = faCode;
  public faTv = faTv;

  public services = [{
    icon: faChartLine,
    title: 'Discovery & Strategy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nesciunt?'
  },
  {
    icon: faGripHorizontal,
    title: 'Interface Design',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nesciunt?'
  },
  {
    icon: faFingerprint,
    title: 'Branding',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nesciunt?'
  },
  {
    icon: faCommentAlt,
    title: 'Communication',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nesciunt?'
  },
  {
    icon: faTv,
    title: 'Multimedia Production',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nesciunt?'
  },
  {
    icon: faCode,
    title: 'Development Solutions',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nesciunt?'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
