import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { DashboardComponent } from './pages';
import { HousingCostsTilesComponent, HousingCostsTileComponent, HousingOwnershipBubbleComponent, InfoDialogComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HousingCostsTilesComponent,
    HousingCostsTileComponent,
    HousingOwnershipBubbleComponent,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
