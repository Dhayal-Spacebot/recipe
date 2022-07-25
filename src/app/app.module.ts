import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headerComponent } from './Header/header.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './Recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Recipe/Recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,

    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
