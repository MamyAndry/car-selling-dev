import { Component, OnInit } from '@angular/core';
import { Announcement } from '../../../mapping/announcement/Announcement';
import { AnnouncementService } from '../../services/announcement/announcement.service';

@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.scss'
})
export class AnnouncementListComponent implements OnInit{
  annonces : Announcement[] = []

  constructor(private annonceService : AnnouncementService){

  }

  ngOnInit(): void {
      this.annonceService.findAll().subscribe(
        (resp)=>{
          this.annonces = resp.data
        }
      )
  }

}
