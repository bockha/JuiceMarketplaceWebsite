import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './start/start.component';
import {PrivacyComponent} from "./privacy/privacy.component";
import {ImprintComponent} from "./imprint/imprint.component";

const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch: 'full'},
    {path: 'start', component: StartComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'imprint', component: ImprintComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LandingpageRoutingModule {
}
