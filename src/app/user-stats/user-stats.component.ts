import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  standalone: false,
  templateUrl: './user-stats.component.html',
  styleUrl: './user-stats.component.css'
})
export class UserStatsComponent implements OnInit {
  ngOnInit(): void {
    
  }
  selectedPeriod: string = 'Cette semaine';
  selectedSector: string = 'Tous les secteurs';
  selectedCompliance: string = 'Tous';
  
  periods: string[] = ['Cette semaine', 'Ce mois', 'Ce trimestre'];
  sectors: string[] = ['Tous les secteurs', 'Secteur A', 'Secteur B', 'Secteur C'];
  compliances: string[] = ['Tous', 'Conformes', 'Non conformes'];
  
  stats = {
    totalUsers: 1250,
    presentThisWeek: 843,
    regularUsers: 621,
    compliantUsers: 589
  };
}