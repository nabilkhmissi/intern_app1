// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdminComponent } from './theme/layouts/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
