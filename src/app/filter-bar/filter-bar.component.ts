import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

export interface FilterCriteria {
  period: string;
  sector: string;
  compliance: string;
  search?: string;
}

export interface UserStats {
  totalUsers: number;
  presentThisWeek: number;
  regularUsers: number;
  compliantUsers: number;
}
@Component({
  selector: 'app-filter-bar',
  standalone: false,
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  @Output() filterChange = new EventEmitter<FilterCriteria>();
  @Output() download = new EventEmitter<void>();
  
  @Input() stats: UserStats = {
    totalUsers: 0,
    presentThisWeek: 0,
    regularUsers: 0,
    compliantUsers: 0
  };

  // Options des filtres
  periodOptions = [
    { value: 'this-week', viewValue: 'Cette semaine' },
    { value: 'this-month', viewValue: 'Ce mois' },
    { value: 'this-quarter', viewValue: 'Ce trimestre' }
  ];

  sectorOptions = [
    { value: 'all', viewValue: 'Tous les secteurs' },
    { value: 'sector-a', viewValue: 'Secteur A' },
    { value: 'sector-b', viewValue: 'Secteur B' },
    { value: 'sector-c', viewValue: 'Secteur C' }
  ];

  complianceOptions = [
    { value: 'all', viewValue: 'Tous' },
    { value: 'compliant', viewValue: 'Conformes' },
    { value: 'non-compliant', viewValue: 'Non conformes' }
  ];

  // Valeurs par défaut
  selectedPeriod = 'this-week';
  selectedSector = 'all';
  selectedCompliance = 'all';
  searchText = '';

  ngOnInit() {
    // Émettre les valeurs par défaut au chargement
    this.applyFilters();
  }

  applyFilters() {
    const filters: FilterCriteria = {
      period: this.selectedPeriod,
      sector: this.selectedSector,
      compliance: this.selectedCompliance,
      search: this.searchText
    };
    
    this.filterChange.emit(filters);
  }

  clearSearch() {
    this.searchText = '';
    this.applyFilters();
  }

  onDownload() {
    this.download.emit();
  }
}