import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home.component';
import {TopComponent} from './top/top.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './not-found.component';
import {MaterialModule} from '../material/material.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DataTableModule} from 'angular2-datatable';
import {OrganizationComponent} from './organization/organization.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    TopComponent,
    SidebarComponent,
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'organizations', component: OrganizationComponent },
            { path: 'users', component: PageNotFoundComponent },
            { path: 'dashboard', component: PageNotFoundComponent }
        ]
      }
    ])
  ],
  exports: [HomeComponent, OrganizationComponent, PageNotFoundComponent, TopComponent , SidebarComponent],
  providers: []
})
export class HomeModule { }
