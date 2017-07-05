import { Component, OnInit } from '@angular/core';
import { Invoice } from '../classes/invoice';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [InvoiceService]
})
export class HomeComponent implements OnInit {
  invoices: Invoice[];

  constructor() { }

  ngOnInit() {

  }

}
