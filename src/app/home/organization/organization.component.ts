import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service/cookie-service/cookie.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'organizations',
  templateUrl: 'organizations.component.html'
})

export class OrganizationComponent implements OnInit {

  constructor(private http: HttpClient, private _cookieService: CookieService, private router: Router) {

  }

  organization:any = [];

  ngOnInit(): void {

    this.http.get('http://localhost:3000/organization')
      .subscribe(res => {
        //console.log(res);
        this.organization = res;
        console.log(this.organization);
        // this.exist_function('', '');
      });

  }

}
