import { TestBed, async } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about.component';
import { NavComponent } from '../../public/view-nav/nav.component';
import { FooterComponent } from '../../public/view-footer/footer.component';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';

import { environment } from '../../../environments/environment';

describe('1st tests', () => {
    it('true is true', () => expect(true).toBe(true));
});

describe('AboutComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AboutComponent,
                NavComponent,
                FooterComponent
            ],
            imports: [
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFireDatabaseModule
            ],
            providers: [
                AngularFireAuth,
                AuthService
            ]
        }).compileComponents();
    }));

    // it('It should create the app', async(() => {
    //     const fixture = TestBed.createComponent(AboutComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app).toBeTruthy();
    // }));

    // beforeEach(function() {
    //     let originalTimeout;
    //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // });

    // it(`It shhould have as title 'Manducare'`, async(() => {
    //     const fixture = TestBed.createComponent(PublicComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual('Manducare');
    // }));

    // it('It should render title in a h1 tag with null', async(() => {
    //     const fixture = TestBed.createComponent(PublicComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').tob;
    // }));
});
