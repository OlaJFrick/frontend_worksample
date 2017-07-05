import { Injectable } from '@angular/core';
import { Invoice } from '../classes/invoice';
import { INVOICES } from '../data/mock-invoices';

@Injectable()
  export class InvoiceService {
    getInvoices(): Promise<Invoice[]> {
      return Promise.resolve(INVOICES);
    }
  }
