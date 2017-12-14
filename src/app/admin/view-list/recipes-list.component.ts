import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Recipe } from '../../services/models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { UploadService } from '../../services/upload.service';
import { AuthService } from '../../services/auth.service';
import { AlertComponent } from '../../ngx/alert/alert.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalComponent } from '../../ngx/modal/modal.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.less']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];
  allRecipes: FirebaseListObservable<any[]>;

  // Alert
  @ViewChild('childAlert') public childAlert: AlertComponent;

  // Modal
  public modalRef: BsModalRef;
  private result;

  // Search Pipe
  public searchTerm;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private uploadService: UploadService,
    private modalService: BsModalService,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  remove(recipe): void {

    event.stopPropagation();

    this.modalRef = this.modalService.show(ModalComponent);
    this.modalRef.content.title = 'Bestätgung';
    this.modalRef.content.message = 'Sind Sie sicher, dass Sie dies löschen möchten?';
    this.modalRef.content._OK = 'Ja';
    this.modalRef.content._cancel = 'Nein';
    this.modalRef.content.onClose.subscribe(result => {
      this.result = result;

      if (this.result === true) {
        this.recipeService
          .remove(recipe)
          .then(() => {
            this.childAlert.showAlert('success', `Rezept wurde erfolgreich entfernt! (Geändert am: ${(new Date()).toLocaleTimeString()})`);
          });
        this.uploadService.deleteFileData(recipe.$key);
      }
    })
  }

  ngOnInit() {
      this.allRecipes = this.db.list('/recipes', {
          query: {
              orderByChild: 'uid',
              equalTo: this.authService.getUid().uid
          }
      });
  }

  detail(recipe): void {
    this.router.navigate(['/admin/recipe-detail', recipe.$key]);
  }
}
