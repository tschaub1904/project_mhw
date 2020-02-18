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
import { MonsterTileComponent } from './components/tiles/monster-tile/monster-tile.component';
import { ArmorTileComponent } from './components/tiles/armor-tile/armor-tile.component';
import { WeaponTileComponent } from './components/tiles/weapon-tile/weapon-tile.component';
import { SkillTileComponent } from './components/tiles/skill-tile/skill-tile.component';
import { SkillRankTileComponent } from './components/tiles/skill-rank-tile/skill-rank-tile.component';
import { ItemTileComponent } from './components/tiles/item-tile/item-tile.component';

const routes: Routes = [{path: '', component: CharmsListComponent}]

@NgModule({
  entryComponents: [
    CharmsTileComponent,
    MonsterTileComponent,
    ArmorTileComponent,
    WeaponTileComponent,
    SkillTileComponent
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
    MonsterTileComponent,
    ArmorTileComponent,
    WeaponTileComponent,
    SkillTileComponent,
    SkillRankTileComponent,
    ItemTileComponent,
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
