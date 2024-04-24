// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardComponent } from './components/card/card.component';

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';

// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavItemComponent } from './components/navigation/nav-content/nav-item/nav-item.component';
import { NavGroupComponent } from './components/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './components/navigation/nav-content/nav-collapse/nav-collapse.component';
import { RouterModule } from '@angular/router';
import { NavContentComponent } from './components/navigation/nav-content/nav-content.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavLeftComponent } from './components/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './components/nav-bar/nav-right/nav-right.component';
import { AuthService } from 'src/app/auth/auth.service';

@NgModule({
  declarations: [
    NavigationComponent, 
    SpinnerComponent, 
    NavCollapseComponent, 

    NavGroupComponent, 
    NavItemComponent,
    NavContentComponent,
    BreadcrumbComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // BreadcrumbComponent,
    NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    NgbCollapseModule,
    NgScrollbarModule,
    CardComponent,
    RouterModule,
  ],
  exports: [
    ReactiveFormsModule,
    BreadcrumbComponent,
    SpinnerComponent,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbCollapseModule,
    NgScrollbarModule,
    CardComponent,
    
    NavigationComponent,
    NavCollapseComponent, 
    NavGroupComponent, 
    NavItemComponent,
    NavContentComponent,
    
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
  ],
  providers : [
    AuthService
  ]
})
export class SharedModule {}
