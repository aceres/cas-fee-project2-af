import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AlertComponent } from '../ngx/alert/alert.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  title = 'Manducare';

  // Authentication
  email: string;
  password: string;

  // Role
  public role: string;
  public firstName: string;
  public lastName: string;

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  constructor(
    public authService: AuthService,
    public db: AngularFireDatabase,
    private router: Router
  ) {}

  ngOnInit() {
    this.userRole();
  }

  userRole() {

      this.db.list('/users', {
          query: {
              orderByChild: 'uid',
              equalTo: this.authService.getUid().uid,
              limitToFirst: 1
          }
      })
      .subscribe(user => {
          console.log('user', user);
          this.role = user[0].role;
          this.firstName = user[0].firstName;
          this.lastName = user[0].lastName;
      });
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

        } else {

          this.childAlert.showAlert('success', `Sie sind erfolgreich angemeldet ${ response.email }! (Angemeldet am: ${(new Date()).toLocaleTimeString()})`);

          // Get the role of user
          this.db.list('/users', {
            query: {
              orderByChild: 'uid',
              equalTo: response.uid,
              limitToFirst: 1
            }
          })
          .subscribe(user => {

            this.role = user[0].role;
            this.firstName = user[0].firstName;
            this.lastName = user[0].lastName;
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
