import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

// Custom Error Handler
import { CustomErrorHandler } from './services/error/CustomErrorHandler';

// Router
import { AppRoutingModule } from './app-routing.module';

// Services
import { AuthService } from './services/auth.service';
import { RecipeService } from './services/recipe.service';
import { UploadService } from './services/upload.service';
import { RegisterService } from './services/register.service';
import { FavoriteService } from './services/favorite.service';
import { CategoryService } from './services/category.service';
import { CuisineService } from './services/cuisine.service';

// App
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';

// Public
import { PublicComponent } from './public/public.component';
import { ImpressumComponent } from './public/view-page/impressum.component';
import { ContactComponent } from './public/view-page/contact.component';
import { AboutComponent } from './public/view-page/about.component';
import { NavComponent } from './public/view-nav/nav.component';
import { FooterComponent } from './public/view-footer/footer.component';
import { CoverComponent } from './public/view-detail/view-cover/cover.component';
import { CategoryListComponent } from './public/view-category/view-list/category-list.component';
import { SearchComponent } from './public/view-search/search.component';
import { PublicReceiptDetailComponent } from './public/view-detail/detail.component';

// Auth
import { UserAuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './admin/view-login/login.component';

// Admin
import { AdminComponent } from './admin/admin.component';
import { RecipesListComponent } from './admin/view-list/recipes-list.component';
import { FavoritesListComponent } from './admin/view-list/favorites-list.component';
import { RecipeDetailComponent } from './admin/view-detail/recipe-detail.component';
import { RecipeAddComponent } from './admin/view-form/recipe-add.component';
import { RecipeEditComponent } from './admin/view-form/recipe-edit.component';
import { RecipeSearchComponent } from './admin/view-search/recipe-search.component';
import { NavAdminComponent } from './admin/view-head-nav/nav-admin.component';
import { AllRecipesListComponent } from './admin/view-list/all-recipes-list.component';

// Master Data Basis
import { CategoryComponent } from './admin/view-list/category.component';
import { CuisineComponent } from './admin/view-list/cuisine.component';

// Register
import { RegisterComponent } from './public/view-register/register.component';
import { UsersListComponent } from './admin/view-list/users-list.component';

// ngx-bootstrap
import { AlertComponent } from './ngx/alert/alert.component';
import { ModalComponent } from './ngx/modal/modal.component';
import { NgxPaginationModule } from 'ngx-pagination';

// Pipes
import { FilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // Database
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // Auth
    AngularFireAuthModule,
    // ngx-bootstrap
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule
  ],
  declarations: [
    // App
    AppComponent,
    PageNotFoundComponent,
    // Public
    PublicComponent,
    ImpressumComponent,
    ContactComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    CoverComponent,
    SearchComponent,
    PublicReceiptDetailComponent,
    CategoryListComponent,
    // Auth
    LoginComponent,
    // Admin
    AdminComponent,
    RecipesListComponent,
    FavoritesListComponent,
    RecipeAddComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeSearchComponent,
    NavAdminComponent,
    AllRecipesListComponent,
    // Register / Users
    RegisterComponent,
    UsersListComponent,
    // Global Static Data (Basis),
    CategoryComponent,
    CuisineComponent,
    // ngx-bootstrap
    AlertComponent,
    ModalComponent,
    // Pipes
    FilterPipe
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [
    // Custom Error Hanlder
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    // Auth
    AuthService,
    UserAuthGuardService,
    // Services
    RecipeService,
    UploadService,
    RegisterService,
    FavoriteService,
    CategoryService,
    CuisineService,
    // ngx Components
    AlertComponent,
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


