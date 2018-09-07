import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatSidenavModule, MatToolbarModule, MatPaginator, MatTableDataSource ,
  MatIconModule, MatMenuModule
} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    // MatPaginator,
    // MatTableDataSource ,
    MatSortModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    // MatPaginator,
    // MatTableDataSource ,
    MatSortModule
  ],
  declarations: []
})
export class MaterialModule { }
