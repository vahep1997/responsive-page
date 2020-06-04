import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { ResponsiveLayoutService } from 'src/app/services/responsive-layout.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss']
})
export class FullPageComponent implements OnInit {

  public faBars = faBars;
  public menu = ['Home', 'Description', 'Services', 'Works', 'Stories', 'Contact Us', 'About Us'];
  public selectedMenu = this.menu[0];

  @ViewChild('header', { static: true }) header: ElementRef;
  @ViewChild('carousel', { static: true }) carousel: ElementRef;
  @ViewChild('description', { static: true }) description: ElementRef;
  @ViewChild('services', { static: true }) services: ElementRef;
  @ViewChild('portfolio', { static: true }) portfolio: ElementRef;
  @ViewChild('works', { static: true }) works: ElementRef;
  @ViewChild('stories', { static: true }) stories: ElementRef;
  @ViewChild('contact', { static: true }) contactUs: ElementRef;
  @ViewChild('about', { static: true }) about: ElementRef;


  constructor(private ngZone: NgZone, public responsiveLayout: ResponsiveLayoutService) {
    window.onresize = () => {
      this.ngZone.run(() => {
        if (window.innerWidth > 900) {
          this.responsiveLayout.mobileVersion = false;
        } else {
          this.responsiveLayout.mobileVersion = true;
        }
      });
    };
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (window.innerWidth < 900) {
      this.responsiveLayout.mobileVersion = true;
    } else {
      this.responsiveLayout.mobileVersion = false;
    }
  }

  changeMenu(menuItem) {

    this.selectedMenu = this.menu.find(item => {
      return item === menuItem;
    });

    switch (menuItem) {
      case 'Home':
        window.scrollTo(0, 0);
        break;
      case 'Description':
        window.scrollTo(0, this.description.nativeElement.offsetTop - 66);
        break;
      case 'Services':
        window.scrollTo(0, this.services.nativeElement.offsetTop - 66);
        break;
      case 'Portfolio':
        window.scrollTo(0, this.portfolio.nativeElement.offsetTop - 66);
        break;
      case 'Works':
        window.scrollTo(0, this.works.nativeElement.offsetTop - 66);
        break;
      case 'Stories':
        window.scrollTo(0, this.stories.nativeElement.offsetTop - 66);
        break;
      case 'Contact Us':
        window.scrollTo(0, this.contactUs.nativeElement.offsetTop - 66);
        break;
      case 'About Us':
        window.scrollTo(0, this.about.nativeElement.offsetTop - 66);
        break;
      default:
        break;
    }
  }

}
