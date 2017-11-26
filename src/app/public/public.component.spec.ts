import { TestBed, async } from '@angular/core/testing';
import { PublicComponent } from '../public/public.component';
import { NavComponent } from '../public/view-nav/nav.component';
import { CoverComponent } from '../public/view-detail/view-cover/cover.component';
import { FooterComponent } from '../public/view-footer/footer.component';
import { SearchComponent } from '../public/view-search/search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AuthService } from '../services/auth.service'

describe('1st tests', () => {
    it('true is true', () => expect(true).toBe(true));
});

describe('PublicComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useClass: AuthService }
            ]
        });
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PublicComponent,
                NavComponent,
                CoverComponent,
                FooterComponent,
                SearchComponent
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [
                AngularFireDatabase,
                FirebaseApp
            ]
        }).compileComponents();
    }));

    // it('It should create the app', async(() => {
    //     const fixture = TestBed.createComponent(PublicComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app).toBeTruthy();
    // }));

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
