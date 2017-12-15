// Angular Modules
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

// Angular Material
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';

// Custom imports
import {FooterComponent} from './footer/footer.component';
import {SidebarModule} from "./sidebar/sidebar.module";
import {AccountComponent} from './account/account.component';
import {ConsoleModule} from './console/console.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        AccountComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SidebarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        FlexLayoutModule,
        ConsoleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
