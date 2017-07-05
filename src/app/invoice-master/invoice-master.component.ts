import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../classes/invoice';

@Component({
  selector: 'app-invoice-master',
  templateUrl: './invoice-master.component.html',
  styleUrls: ['./invoice-master.component.scss']
})

export class InvoiceMasterComponent implements OnChanges {
  @Output() invoiceUpdate = new EventEmitter();
  @Input() invoiceData: Invoice;
  @Input() onMenuChange: string = '';
  selectedInvoice: Invoice;
  header = 'Invoices';
  props = ['Type', 'Account Name', 'Status', 'Currency', 'Balance'];
  filtername: '';
  reverseOrder = '';
  toggleState = true;
  currentFilter = '';

  ngOnChanges() {
    this.filteredBy(this.onMenuChange);
  }

  onSelect(invoice: Invoice): void {
    this.selectedInvoice = invoice;
    this.invoiceUpdate.emit(this.selectedInvoice);
  }

  filteredBy(arg) {
    this.filtername = arg;

    // Toggle to reverse table order
    this.reverseOrder = this.toggleState ? "-" : "";
    this.toggleState = !this.toggleState;
    let sortedArg = this.reverseOrder + arg;
    this.currentFilter = sortedArg.toLowerCase().split(' ').join('');
  }
}