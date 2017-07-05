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
  header = 'Invoices';
  iProps = ['Type', 'Account Name', 'Status', 'Currency', 'Balance'];
  reverseOrder = '';
  toggleState = true;
  currentFilter = '';
  balance = '';
  selectedInvoice: Invoice;
  filtername: '';

  constructor() { }

  ngOnChanges() {
    this.filteredBy(this.onMenuChange);
  }

  onSelect(invoice: Invoice): void {
    this.selectedInvoice = invoice;
    this.invoiceUpdate.emit(this.selectedInvoice);
  }

  filteredBy(arg) {
    this.filtername = arg;
    this.reverseOrder = this.toggleState ? "-" : "";
    this.toggleState = !this.toggleState;
    let sortedArg = this.reverseOrder + arg;
    this.currentFilter = sortedArg.toLowerCase().split(' ').join('');
  }

  isActive(arg) {
    let isActive = arg ? "Active" : "Deactivated";
    return isActive;
  }
  
  getBalance(sum) { this.balance = sum; }

}