import { Location } from "../Location"
import { Car } from "../Car"
import { AnnouncementStatus } from "./AnnouncementStatus"

export class Announcement{
    idAnnouncement : string = "";
    dateAddition : string = "";
    dateValidation : string ="";
    price : string ="";
    description : string ="";
    status : AnnouncementStatus = new AnnouncementStatus;
    location ?: Location = new Location
    car ?: Car = new Car;
  }