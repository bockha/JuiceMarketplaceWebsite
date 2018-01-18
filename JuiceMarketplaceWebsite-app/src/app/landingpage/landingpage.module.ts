import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartComponent} from './start/start.component';
import {LandingpageRoutingModule} from './landingpage-routing.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MarkdownModule } from 'ngx-md';

@NgModule({
    imports: [
        CommonModule,
        LandingpageRoutingModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MarkdownModule.forRoot(),
    ],
    declarations: [StartComponent, PrivacyComponent, ImprintComponent]
})
export class LandingpageModule {
}
