import { GetUserService } from './../../services/getuser.service';
import { User } from './../../models/user';
import { SessionService } from './../../services/session.service';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  existUser: boolean;
  user: User;
  loggedIn: boolean;
  errorMessage: string;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _getUserService: GetUserService,
              private _sessionService: SessionService) {

    this.loggedIn = false;
  }
  // getter
  get sessionService(): SessionService { return this._sessionService; }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('body').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print Tab</title>
          <style>
          h1 {
              color: white;
              text-align: center;
          }

          p {
              font-family: verdana;
              font-size: 12px;
              display: inline;
          }

          .form-control{
            visibility: hidden;
          }

          .card{
            text-align: center;
            border: 1px solid black;
          }
          header {
            visibility: hidden;
          }

          button{
            visibility: hidden;
          }
          </style>
          </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}

  /**
   * First of all validates login from.
   * After calls the getUsers which contains the users.
   * We pass the user, username and password to the getUserService.login().
   * If username and password exist return the user else shows error message.
   * */
  login(form: NgForm) {
    if (!form.valid) {
      if ( form.value.username === '' || form.value.password === '' ) {
        this.errorMessage = 'Minden mezőt ki kell tölteni!';
      } else if ( form.value.password.length < 8 ) {
        this.errorMessage = 'A jelszó min 8 karakter';
      } else if ( form.value.username.length < 4 ) {
        this.errorMessage = 'A felhasználónév min 4 karakter';
      }
      this.existUser = false;
      return;
    }

    this._getUserService.getUsers().subscribe(
      user => {
        this.user = this._getUserService.login( user, form.value.username, form.value.password);
        if (this.user != null) {
          this.errorMessage = null;
          this.existUser = true;
          this.loggedIn = true;
          this.sessionService.setUser(this.user);
          this.sessionService.setLoggedIn(true);

            // TODO
            // if (this.user.username === 'admin') {
            //   this.router.navigate(['/admin']);
            // }
        } else {
          this.existUser = false;
          this.errorMessage = 'Hibás felhasználónév vagy jelszó!';
          return;
        }
      },
      () => this._router.navigate([this._route])
    );
  }

 /**
  * when user logged out the parameters set to default value
  * and delete user from session
 * */
  logout() {
    this.loggedIn = false;
    this.existUser = null;
    this.sessionService.setLoggedIn(false);
    sessionStorage.removeItem('user');
    this._router.navigate(['/main-page']);
  }
}
