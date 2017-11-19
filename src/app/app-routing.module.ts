import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App
import { PageNotFoundComponent } from './not-found.component';
// Public
import { PublicComponent } from './public/public.component';
import { ImpressumComponent } from './public/view-page/impressum.component';
import { ContactComponent } from './public/view-page/contact.component';
import { AboutComponent } from './public/view-page/about.component';
import { PublicReceiptDetailComponent } from './public/view-detail/detail.component';
import { CategoryListComponent } from './public/view-category/view-list/category-list.component';
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
import { AllRecipesListComponent } from './admin/view-list/all-recipes-list.component';
// Register
import { RegisterComponent } from './public/view-register/register.component';
import { UsersListComponent } from './admin/view-list/users-list.component';
// Master Data Basis
import { CategoryComponent } from './admin/view-list/category.component';
import { CuisineComponent } from './admin/view-list/cuisine.component';

const appRoutes: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipe-detail/:id', component: PublicReceiptDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'category-list/:category', component: CategoryListComponent },
  { path: 'admin', component: AdminComponent, canActivate: [UserAuthGuardService], children: [
    { path: 'recipes', component: RecipesListComponent},
    { path: 'favorites', component: FavoritesListComponent},
    { path: 'recipe-detail/:id', component: RecipeDetailComponent},
    { path: 'recipe-add', component: RecipeAddComponent},
    { path: 'recipe-edit/:id', component: RecipeEditComponent},
    { path: 'basis-data-category', component: CategoryComponent},
    { path: 'basis-data-cuisine', component: CuisineComponent},
    { path: 'users', component: UsersListComponent},
    { path: 'all-recipes', component: AllRecipesListComponent}
  ] },
  { path: '', redirectTo: '/public', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
