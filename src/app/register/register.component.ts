import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterService } from '../services/register.service';

import { AlertComponent } from '../ngx/alert/alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  title = 'Manducare';

  // Authentication / Role definition for the registration
  model: any = {};
  role = 'normal';

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  constructor(
    public authService: AuthService,
    public registerService: RegisterService
  ) {}

  register() {
    this.authService.signup(this.model.email, this.model.password).then(
      response => {

        console.log('response.uid: ', response.uid);

        if (response.uid !== undefined) {
          this.registerService.add(
              response.uid,
              this.model.firstName,
              this.model.lastName,
              this.model.email,
              this.role,
              this.model.street,
              this.model.houseNumber,
              this.model.zip,
              this.model.city,
              this.model.country
          )
              .subscribe(response => {

              this.childAlert.showAlert('success', `Sie wurden erfolgreich registriert! (Erstellt am: ${(new Date()).toLocaleTimeString()})`);
            });
        } else if (response.uid === undefined) {
          this.childAlert.showAlert('danger', response);
        }
      }
    );
  }
}
