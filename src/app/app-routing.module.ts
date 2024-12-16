import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    // Redirige vers /home par défaut
  { path: 'home', component: HomeComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: '**', component: NotFoundComponent },  // Page Not Found pour les autres routes
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
