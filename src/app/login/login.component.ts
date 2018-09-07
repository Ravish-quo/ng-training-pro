import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class SimpleComponent implements OnInit {

  constructor(private http: HttpClient, private _cookieService: CookieService, private router: Router) {

  }

  userLogin: string;
  userPass: string;


  email_exist = false;
  does_exist = false;
  is_admin = false;
  member_info: any = {};
  last_id: number;

  members: any;

  exist_function(email, password): void {
    this.email_exist = false;

    for (let i = 0; i < this.members.length; i++) {
      if (!this.email_exist) {
        if (this.members[i]['email'] === email && this.members[i]['password'] === password) {
          this.does_exist = true;
          this.email_exist = true;
          this.is_admin = this.members[i]['is_admin'];
          this.member_info = this.members[i];
        } else if (this.members[i]['email'] === email && this.members[i]['password'] !== password) {
          this.does_exist = false;
          this.email_exist = true;

        } else {
          this.does_exist = false;
          this.email_exist = false;
        }
      }
      this.last_id = this.members[i]['id'];
    }
  }

  signupFormSubmit(valid): void {
    console.log(valid);
  }

  ngOnInit(): void {

    this.userLogin = '';
    this.userPass = '';

    if (this._cookieService.get('email')) {
      if (this._cookieService.get('is_admin')) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/home']);
      }
    }

    this.http.get('http://localhost:3000/login')
      .subscribe(res => {
        this.members = res;
        console.log(this.members);
        this.exist_function('', '');
      });

  }


  loginFormSubmit(valid): void {
    if (valid) {
      this.exist_function(this.userLogin, this.userPass);
      console.log(this.userLogin, this.userPass);
      if (this.email_exist) {
        if (this.does_exist) {
          console.log(this.member_info);
          if (this.is_admin) {
            this._cookieService.set('authorize', 'superadmin');
            this._cookieService.set('id', this.member_info['id']);
            this._cookieService.set('name', this.member_info['name']);
            this._cookieService.set('organization', this.member_info['organizations']);
            this._cookieService.set('email', this.member_info['email']);
            this._cookieService.set('is_admin', this.member_info['is_admin']);
            this.router.navigate(['/home']);

          } else {

            if (this.member_info['organizations'].hasOwnProperty('id')) {

              if (this.member_info['organizations']['is_admin']) {

                this._cookieService.set('authorize', 'superadmin');
                this._cookieService.set('id', this.member_info['id']);
                this._cookieService.set('name', this.member_info['name']);
                this._cookieService.set('organization', this.member_info['organizations']);
                this._cookieService.set('email', this.member_info['email']);
                this._cookieService.set('is_admin', this.member_info['is_admin']);
                this.router.navigate(['/home']);
              } else {
                // alert("Denied","USER IS NOT ADMIN","error");
                alert('USER IS NOT ADMIN');
              }
            } else {
              // alert("Denied","USER IS NOT ADMIN","error");
              alert('USER IS NOT ADMIN');
            }
          }
        } else {
          alert('Password doesnot match the given email id');
        }
      } else {
        alert('USER DOES NOT EXIST');
      }
    }
  }

}
