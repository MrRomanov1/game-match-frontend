import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  userLoggedIn: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems() {
    this.items = [
      {
        label: 'Lista gier',
        icon: 'pi pi-list',
        styleClass: 'p-text-bold',
        items: [
          {
            label: 'Wszystkie',
            icon: 'pi pi-list',
            routerLink: 'games'
          },
          {
            label: 'Popularne',
            icon: 'pi pi-star-fill',
            routerLink: 'games'
          },
          {
            label: 'Nadchodzące',
            icon: 'pi pi-calendar-plus',
            routerLink: 'games'
          },
          {
            label: 'Njwyżej oceniane',
            icon: 'pi pi-chart-line',
            routerLink: 'games'
          },
          {
            label: 'Platformy',
            icon: 'pi pi-tags',
            routerLink: 'games',
            items: [
              {
                label: 'PC',
                icon: 'pi pi-microsoft',
                routerLink: 'games'
              },
              {
                label: 'XBOX',
                icon: 'fab fa-xbox',
                routerLink: 'games'
              },
              {
                label: 'PlayStation',
                icon: 'fab fa-playstation',
                routerLink: 'games'
              },
              {
                label: 'Nintendo',
                icon: 'fas fa-gamepad',
                routerLink: 'games'
              },
              {
                label: 'Mobilne',
                icon: 'fas fa-mobile-alt',
                routerLink: 'games'
              }
            ]
          }
        ]
      },
      {
        label: 'Wiadomości',
        icon: 'fas fa-newspaper'
      },
      {
        label: 'Dodaj grę',
        icon: 'fas fa-folder-plus',
        command: () => this.checkIfUserIsLoggedIn()
      }
    ];
  }

  checkIfUserIsLoggedIn() {
    if (this.userLoggedIn) {
      //handle route
    } else {
      this.showLogInMessage();
    }    
  }

  showLogInMessage() {
    this.messageService.add({ severity: 'info', summary: 'Dodaj grę', detail: 'Aby dodać grę do bazy należy się zalogować' });
  }
}
