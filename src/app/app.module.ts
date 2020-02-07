import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CharmsDetailsComponent } from './components/charms/charms-details/charms-details.component';
import { CharmsListComponent } from './components/charms/charms-list/charms-list.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: CharmsListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CharmsDetailsComponent,
    CharmsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
