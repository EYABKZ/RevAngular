import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../menu.service";
import { Menu } from "../../../Core/Models/Menu";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus: Menu[] = [
  //  {id: 1, title: "Menu 1", description: "Description 1", image: "", approved: true, reservations: []},
    //{id: 2, title: "Menu 2", description: "Description 2", image: "", approved: false, reservations: []},
    //{id: 3, title: "Menu 3", description: "Description 3", image: "", approved: true, reservations: []}
  ];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe({

    })
    // Tu peux ici filtrer les menus si tu veux seulement les menus approuvés
   // this.menus = this.menus.filter((menu) => menu.approved);
  }

  reserve(menuId: number): void {
    this.menuService.reserveMenu(menuId, 1).subscribe(() => {
      alert('Réservé avec succès !');
    });
  }
}
