import { Component } from '@angular/core';


import {Menu} from "../../../Core/Models/Menu";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  menu: Menu = { id: 0, title: '', image: '', description: '', approved: false, reservations: [] };

 // constructor(private menuService: MenuService) {}

  addMenu(): void {
    //this.menuService.addMenu(this.menu).subscribe(() => {
      alert('Menu ajouté avec succès !');
   // });

  }
}
