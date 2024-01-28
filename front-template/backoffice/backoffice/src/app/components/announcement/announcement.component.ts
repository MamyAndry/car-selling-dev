import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Announcement } from '../../../mapping/announcement/Announcement';
import DataTable from 'datatables.net-dt';
import { FormsModule } from '@angular/forms';
import { data } from 'jquery';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent implements OnInit{

  Announcements : Announcement[] = []

  constructor(private announcementService : AnnouncementService, private route : Router){}


  ngOnInit(): void {
    this.announcementService.findAllUnpublishedAnnouncement().subscribe(
      (data) => {
        this.Announcements = data.data
      }
    )
  }

  getDetails(temp : Announcement):void{
    console.log(JSON.stringify(temp))
    // this.route.navigate([])
  }

  delete():void{

  }
  validate(temp : Announcement):void{
    temp.dateValidation = new Date().toDateString()
    temp.status.id = 10
    temp.status.name = "Published"
    this.announcementService.validate(temp)
    // location.reload()
  }
  private initializeDataTable(): void {

  }



}
