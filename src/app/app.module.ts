import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainAreaComponent } from './components/layout/main-area/main-area.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { SearchBarComponent } from './components/layout/search-bar/search-bar.component';
import { CharmsListComponent } from './components/charms/charms-list/charms-list.component';


const routes: Routes = [{path: '', component: CharmsListComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainAreaComponent,
    SidebarComponent,
    SearchBarComponent,
    CharmsListComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
