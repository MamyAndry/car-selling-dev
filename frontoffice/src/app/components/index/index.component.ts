import { Component } from '@angular/core';
import { AnnouncementListComponent } from "../announcement-list/announcement-list.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [AnnouncementListComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent{

}
