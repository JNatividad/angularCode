import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { FilterTablePipe } from './pipes/filter-table.pipe';
import { FormsModule } from "@angular/forms";
import { UserSelectedComponent } from './components/user-selected/user-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FilterTablePipe,
    UserSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
