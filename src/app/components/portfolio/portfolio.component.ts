import { ResponsiveLayoutService } from './../../services/responsive-layout.service';
import { Component, OnInit } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public faLightbulb = faLightbulb;

  constructor(public responsiveLayout: ResponsiveLayoutService) { }

  ngOnInit(): void {
  }

}
