import { Component, OnInit } from '@angular/core';
import { faLightbulb, faChartLine, faLaptopCode, faBook, faUserTie, faBolt, faInfinity, faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public faLightbulb = faLightbulb;
  public faChartLine = faChartLine;
  public faLaptopCode = faLaptopCode;
  public faBook = faBook;
  public faUserTie = faUserTie;
  public faBolt = faBolt;
  public faInfinity = faInfinity;
  public faCloud = faCloud;

  constructor() { }

  ngOnInit(): void {
  }

}
