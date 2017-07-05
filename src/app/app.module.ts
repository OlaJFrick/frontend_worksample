import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { HomeComponent } from './home/home.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { InvoiceService } from './services/invoice.service';
import { InvoiceMasterComponent } from './invoice-master/invoice-master.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    HomeComponent,
    OrderByPipe,
    InvoiceMasterComponent,
    InvoiceDetailComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }