import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  navCollapsed: boolean;
  navCollapsedMob: boolean = false;

// public method
navMobClick() {
  if (this.navCollapsedMob && !document.querySelector('app-navigation.coded-navbar').classList.contains('mob-open')) {
    this.navCollapsedMob = !this.navCollapsedMob;
    setTimeout(() => {
      this.navCollapsedMob = !this.navCollapsedMob;
    }, 100);
  } else {
    this.navCollapsedMob = !this.navCollapsedMob;
  }
}
}
