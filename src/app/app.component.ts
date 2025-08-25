import { Component } from '@angular/core';
import type { FilterCriteria, UserStats } from './filter-bar/filter-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  userStats: UserStats = {
    totalUsers: 150,
    presentThisWeek: 120,
    regularUsers: 100,
    compliantUsers: 130
  };

  onFilterChange(filters: FilterCriteria) {
    console.log('Filtres appliqués:', filters);
    // Ici, vous pouvez appeler votre API avec les filtres
    // et mettre à jour les statistiques
  }

  onDownload() {
    console.log('Téléchargement des données');
    // Implémentez l'exportation des données
  }
}
