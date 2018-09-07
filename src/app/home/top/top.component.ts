import { Component, OnInit , EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service/cookie-service/cookie.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top.component.html'
})
export class TopComponent implements OnInit{

  authorize:string;

  constructor(private http: HttpClient, private _cookieService: CookieService, private router: Router) {

  }

  ngOnInit(): void {

    this.authorize = this._cookieService.get('authorize');

  }

  exit(): void{

    this._cookieService.delete('authorize');
    this._cookieService.delete('organizationName');
    this._cookieService.delete('organizationID');
    this._cookieService.set('authorize', 'superadmin');
    this.router.navigate(['/home/organizations']);
  }

  logout(): void{

    this._cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

}
