// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// import { AdminComponent } from './theme/layouts/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    SharedModule, 
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
