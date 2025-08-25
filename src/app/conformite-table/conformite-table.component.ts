import { Component } from '@angular/core';

interface Employe {
  nom: string;
  joursDeclares: string[];
  jours: { [key: string]: boolean };
  joursSemaine: string;
  conformite: 'Conforme' | 'Partiel' | 'Non conforme';
}

@Component({
  selector: 'app-conformite-table',
  standalone: false,
  templateUrl: './conformite-table.component.html',
  styleUrl: './conformite-table.component.css'
})
export class ConformiteTableComponent {
  displayedColumns: string[] = ['nom', 'joursDeclares', 'lun', 'mar', 'mer', 'jeu', 'ven', 'joursSemaine', 'conformite', 'actions'];

  dataSource: Employe[] = [
    {
      nom: 'Lefèvre',
      joursDeclares: ['Lun', 'Mar', 'Mer'],
      jours: { lun: true, mar: true, mer: false, jeu: false, ven: false },
      joursSemaine: '2/5',
      conformite: 'Partiel'
    },
    {
      nom: 'Martin',
      joursDeclares: ['Lun', 'Mer', 'Ven'],
      jours: { lun: true, mar: false, mer: true, jeu: false, ven: true },
      joursSemaine: '3/5',
      conformite: 'Conforme'
    },
    {
      nom: 'Bertrand',
      joursDeclares: ['Mar', 'Jeu'],
      jours: { lun: false, mar: false, mer: true, jeu: false, ven: false },
      joursSemaine: '1/5',
      conformite: 'Non conforme'
    },
    {
      nom: 'Durand',
      joursDeclares: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
      jours: { lun: true, mar: true, mer: true, jeu: true, ven: false },
      joursSemaine: '4/5',
      conformite: 'Partiel'
    }
  ];

}
