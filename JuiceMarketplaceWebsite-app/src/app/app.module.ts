// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; // still needed @see https://github.com/angular/angular/issues/19788

// Angular Material
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material'
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

// Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { JuiceProgramConfiguratorModule } from './juice-program-configurator/juice-program-configurator.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { AccessGuard } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    JuiceProgramConfiguratorModule,
    UtilitiesModule
  ],
  declarations: [
    AppComponent,
    CreateRecipeComponent,
    RecipesComponent,
    DashboardComponent,
    FooterComponent,
  ],
  providers: [AccessGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
