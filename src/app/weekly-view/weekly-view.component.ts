import { Component } from '@angular/core';

interface Attendance {
  date: string;
  presents: number;
  absents: number;
}

@Component({
  selector: 'app-weekly-view',
  standalone: false,
  templateUrl: './weekly-view.component.html',
  styleUrl: './weekly-view.component.css'
})
export class WeeklyViewComponent {

 weekData: Attendance[] = [
    { date: 'Lun 29', presents: 3, absents: 1 },
    { date: 'Mar 30', presents: 2, absents: 2 },
    { date: 'Mer 1', presents: 3, absents: 1 },
    { date: 'Jeu 2', presents: 1, absents: 3 },
    { date: 'Ven 3', presents: 1, absents: 3 },
  ];
}
