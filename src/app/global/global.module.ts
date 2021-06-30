import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {FlexLayoutModule } from "@angular/flex-layout"
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,MatCardModule,
    FlexLayoutModule,
 MatSnackBarModule
  ],
  exports:[
    HeaderComponent,
    HomeComponent
  ],
  providers:[HttpClientModule]
})
export class GlobalModule { }
