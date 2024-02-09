import { Component } from '@angular/core';
import { AnnouncementListComponent } from "../announcement-list/announcement-list.component";
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AnnouncementListComponent],
  templateUrl: './index.page.html',
  styleUrl: './index.page.scss'
})
export class IndexPage{

}
