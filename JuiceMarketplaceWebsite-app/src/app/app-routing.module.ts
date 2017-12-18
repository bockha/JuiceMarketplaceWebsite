import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConsoleMenuComponent} from './sidebar/console/console-menu.component';
import {StatisticsComponent} from './sidebar/statistics/statistics.component';
import {IndexComponent} from './sidebar/index/index.component';


const routes: Routes = [
    {path: '', redirectTo: 'landingpage', pathMatch: 'full'},
    {path: 'landingpage', loadChildren: './landingpage/landingpage.module#LandingpageModule'},
    {path: 'console', loadChildren: './console/console.module#ConsoleModule'},
    {path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule'},
    {path: 'news', loadChildren: './news/news.module#NewsModule'},
    {path: 'index', outlet: 'sidebar', component: IndexComponent},
    {path: 'console-menu', outlet: 'sidebar', component: ConsoleMenuComponent},
    // {path: 'statistics', outlet: 'sidebar', component: StatisticsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
