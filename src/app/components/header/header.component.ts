import { Component, OnInit, NgZone } from '@angular/core';
import { ResponsiveLayoutService } from 'src/app/services/responsive-layout.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public faBars = faBars;
  public menu = ['Home', 'Pages', 'Elements', 'Portfolio', 'Blog', 'Contact Us'];

  constructor(private ngZone: NgZone, public responsiveLayout: ResponsiveLayoutService) {
    window.onresize = () => {
      this.ngZone.run(() => {
        if (window.innerWidth > 900) {
          this.responsiveLayout.mobileVersion = false;
        } else {
          this.responsiveLayout.mobileVersion = true;
        }
      });
      console.log(this.responsiveLayout.mobileVersion);
    };
  }

  ngOnInit(): void {
    if (window.innerWidth < 900) {
      this.responsiveLayout.mobileVersion = true;
    } else {
      this.responsiveLayout.mobileVersion = false;
    }
  }

}
