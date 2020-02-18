import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainAreaComponent } from './components/layout/main-area/main-area.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
import { CharmsListComponent } from './components/charms/charms-list/charms-list.component';
import { ResultListComponent } from './components/search/result-list/result-list.component';
import { SearchComponent } from './components/search/search/search.component';
import { SearchFilterComponent } from './components/search/search-filter/search-filter.component';
import { CharmsTileComponent } from './components/tiles/charms-tile/charms-tile.component';
import { WrapperTileComponent } from './components/tiles/wrapper-tile/wrapper-tile.component';
import { TileHostDirective } from './directives/tile-host.directive';
import { TileAreaComponent } from './components/tile-area/tile-area.component';

const routes: Routes = [{path: '', component: CharmsListComponent}]

@NgModule({
  entryComponents: [
    CharmsTileComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainAreaComponent,
    SidebarComponent,
    SearchBarComponent,
    CharmsListComponent,
    ResultListComponent,
    SearchComponent,
    SearchFilterComponent,
    CharmsTileComponent,
    WrapperTileComponent,
    TileHostDirective,
    TileAreaComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
