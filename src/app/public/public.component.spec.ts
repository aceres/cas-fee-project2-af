import { TestBed, async } from '@angular/core/testing';
import { PublicComponent } from '../public/public.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PublicComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PublicComponent
            ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    // it('It should create the app', async(() => {
    //     const fixture = TestBed.createComponent(PublicComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app).toBeTruthy();
    // }));
    //
    // it(`It shhould have as title 'Manducare'`, async(() => {
    //     const fixture = TestBed.createComponent(PublicComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual('Manducare');
    // }));
    //
    // it('It should render title in a h1 tag with null', async(() => {
    //     const fixture = TestBed.createComponent(PublicComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').tob;
    // }));
});
