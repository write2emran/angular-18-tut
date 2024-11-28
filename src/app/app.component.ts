import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';
import { GalleriaModule } from 'primeng/galleria';
import { PrimeNGConfig } from 'primeng/api';

import {TranslatePipe, TranslateDirective, TranslateModule} from "@ngx-translate/core";
import {TranslateService, _} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CardModule, 
    ButtonModule, 
    MenubarModule, 
    GalleriaModule,
     HeaderComponent, 
     TranslatePipe,
     TranslateModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  value = 'Translation testing';
  languages = [
    { name: 'English', code: 'en' },
    { name: 'Arabic', code: 'ar' },
]

  images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
  name: string;
  _age: number;

    constructor(
      // private primengConfig: PrimeNGConfig,
    ) { 
      this.name = "Hasan",
      this._age = 27
    }

    private translateService = inject(TranslateService);
    
    ngOnInit() {
      const defaultlang = localStorage.getItem('lang')  || 'de';
      this.translateService.setDefaultLang(defaultlang);
      this.translateService.use(defaultlang);
      // this.primengConfig.ripple = true;
    }

    changeLang(lang: any) {
      this.translateService.use(lang);
      localStorage.setItem('lang', lang);
    }
    
    
}

