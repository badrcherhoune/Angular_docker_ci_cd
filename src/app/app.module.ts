import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConformiteTableComponent } from './conformite-table/conformite-table.component';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';
import { MatSelectModule } from '@angular/material/select';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ConformiteTableComponent,
    WeeklyViewComponent,
    UserStatsComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Material
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
