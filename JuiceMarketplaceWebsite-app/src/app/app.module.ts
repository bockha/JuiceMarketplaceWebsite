// import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {FooterComponent} from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SidebarModule} from "./sidebar/sidebar.module";
import { AccountComponent } from './account/account.component';
import { ConsoleModule } from './console/console.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    ConsoleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
