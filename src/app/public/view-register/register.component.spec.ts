import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../../public/view-register/register.component';
import { NavAdminComponent } from '../../admin/view-head-nav/nav-admin.component';
import { FooterComponent } from '../../public/view-footer/footer.component';
import { AlertComponent } from '../../ngx/alert/alert.component';
import { ModalComponent } from '../../ngx/modal/modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

import { AuthService } from '../../services/auth.service'

describe('RegisterComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useClass: AuthService }
            ]
        });
    });

    // beforeEach(async(() => {
    //     TestBed.configureTestingModule({
    //         declarations: [
    //             RegisterComponent,
    //             NavAdminComponent,
    //             FooterComponent,
    //             AlertComponent,
    //             ModalComponent
    //         ],
    //         imports: [
    //             RouterTestingModule,
    //             FormsModule,
    //             BrowserModule
    //         ],
    //         providers: [
    //             AngularFireDatabase,
    //             FirebaseApp
    //         ]
    //     }).compileComponents();
    // }));

    it('It should create the register component', async(() => {

    }));
});
