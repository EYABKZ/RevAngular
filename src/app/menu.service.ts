import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import { Menu } from "../Core/Models/Menu";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:4000/menus'; // URL du serveur json-server

  constructor(private http: HttpClient) {}

  // Récupérer tous les menus
  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl);  // Effectuer la requête HTTP GET pour récupérer les menus
  }

  // Réserver un menu
  reserveMenu(menuId: number, userId: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.apiUrl}/${menuId}`).pipe(
        switchMap(menu => {
          menu.reservations.push(userId);  // Ajouter l'ID utilisateur
          return this.http.put<Menu>(`${this.apiUrl}/${menuId}`, menu);  // Mettre à jour le menu
        })
    );
  }
}
