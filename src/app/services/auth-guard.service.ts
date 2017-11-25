import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalComponent } from '../ngx/modal/modal.component';

@Injectable()
export class UserAuthGuardService {

    // Modal
    public modalRef: BsModalRef;
    result;

    // Alert
    @ViewChild('childAlert') public childAlert: ModalComponent;

    constructor(
        private authService: AuthService,
        private router: Router,
        private modalService: BsModalService
    ) {}

    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated() && this.router.url !== '/login') {
            this.modalRef = this.modalService.show(ModalComponent);
            this.modalRef.content.title = 'Berechtigung';
            this.modalRef.content.message = 'Bitte loggen Sie sich ein!';
            this.modalRef.content._OK = 'Zum Login';
            this.modalRef.content._cancel = 'Abbrechen';
            this.modalRef.content.onClose.subscribe(result => {
                this.result = result;
                if (this.result === true) {
                    this.router.navigate(['/login']);
                }
            })
        } else {
            return this.authService.isAuthenticated();
        }
    }
}
