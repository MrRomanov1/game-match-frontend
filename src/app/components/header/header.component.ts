import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems() {
    this.items = [
      {
        label: 'Wszystkie',
        icon: 'pi pi-list',
        routerLink: 'games',
        styleClass: 'p-text-bold'
      }
    ];
  }
}
