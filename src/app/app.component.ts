import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainFactoryService } from './core/services/main-factory.service';
import { INavLinks } from './core/interfaces/navlinks.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title: string;
  activeTab: string;
  navLinks: INavLinks[];
  activeLinkIndex: number;
  loader:boolean;

  constructor(
    private router:Router,
    private mainFactory : MainFactoryService
    ) {
    this.activeLinkIndex = -1; 
    this.title = 'energyApp';
    this.activeTab = 'dashboard';
    this.navLinks = mainFactory.navLinks;
    this.loader=false;
    // this.loader = true;
    // setTimeout(() => {
    //   this.loader = false;
    // }, 3000);
   
  }
}
