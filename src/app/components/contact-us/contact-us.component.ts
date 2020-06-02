import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen, faClock, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public faMapMarkerAlt = faMapMarkerAlt;
  public faPhoneAlt = faPhoneAlt;
  public faEnvelopeOpen = faEnvelopeOpen;
  public faClock = faClock;
  public faCommentAlt = faCommentAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
