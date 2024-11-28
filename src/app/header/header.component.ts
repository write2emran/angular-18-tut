import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-header',
  imports: [MenubarModule, InputTextModule, CommonModule, BadgeModule, RippleModule, AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;

  

  ngOnInit(): void {
    this.items = [
      {
        label: 'Who are we',
        icon: 'pi pi-home'
      },
      {
        label: 'What we do',
        icon: 'pi pi-star'
      },
      {
        label: 'Our experience',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Meet Us',
        icon: 'pi pi-envelope'
      },
      {
        label: 'Language',
        icon: 'pi pi-globe'
      }
    ]
  }
}
