import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './login/login.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: SimpleComponent
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
    // data: {preload: true}
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {
      enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
