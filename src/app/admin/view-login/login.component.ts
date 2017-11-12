import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { AlertComponent } from '../../ngx/alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  title = 'Manducare';

  // Authentication
  email: string;
  password: string;

  // Role
  public role: string;

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  constructor(
    public authService: AuthService,
    public db: AngularFireDatabase,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService !== null) {
      this.router.navigate(['/admin/recipes']);
    } else {
      this.authService.logout();
      this.router.navigate(['/admin']);
    }
  }

  login() {
    this.authService.login(this.email, this.password).then(
      response => {

        if (response.code === 'auth/invalid-email') {
          this.childAlert.showAlert('danger', `${ response.message }!`);
        } else if (response.code === 'auth/user-not-found') {
          this.childAlert.showAlert('info', `${ response.message }!`);
        } else if (response.code === 'auth/wrong-password') {
            this.childAlert.showAlert('info', `${ response.message }!`);
        } else if (response.code === 'auth/network-request-failed') {
            this.childAlert.showAlert('danger', `${ response.message }!`);
        } else {
          this.childAlert.showAlert('success', `Sie sind erfolgreich angemeldet ${ response.email }! (Angemeldet am: ${(new Date()).toLocaleTimeString()})`);

          // Get the role of user
          this.db.list('/users', {
            query: {
              orderByChild: 'uid',
              equalTo: this.authService.getUid().uid,
              limitToFirst: 1
            }
          })
          .subscribe(user => {

            this.role = user[0].role;
            this.router.navigate(['/admin/recipes']);
          });
        }
      }
    );
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
    this.childAlert.showAlert('success', `Sie sind erfolgreich abgemeldet am: ${(new Date()).toLocaleTimeString()})`);
    this.router.navigateByUrl('/admin');
  }
}
