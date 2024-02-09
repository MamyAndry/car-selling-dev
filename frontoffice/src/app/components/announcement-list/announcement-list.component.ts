import { Component } from '@angular/core';
import { Announcement } from '../../../mapping/announcement/Announcement';
import { AnnouncementService } from '../../services/announcement/announcement.service';

@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.scss'
})
export class AnnouncementListComponent {
  allAnnouncement : Announcement[] = []
  announcement : Announcement = new Announcement

  constructor(private service : AnnouncementService){}

  ngOnInit():void {
    this.service.findAllPublishedAnnouncement().subscribe(announcement => {
      this.allAnnouncement = Array.from(announcement)
      // console.log(this.allAnnouncement.length)
    }, error => console.log(error));
  }
}
