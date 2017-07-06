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
  @Input() filterChange: string = '';
  @Input() toggleMenu: boolean = true;
  selectedInvoice: Invoice;
  header = 'Invoices';
  props = ['Type', 'Account Name', 'Status', 'Currency', 'Balance'];
  selectedType: '';
  reverseOrder = '';
  toggleState = true;
  selectedFilter = '';

  ngOnChanges() {
    this.filteredBy(this.filterChange);
  }

  onSelect(invoice: Invoice): void {
    this.selectedInvoice = invoice;
    this.invoiceUpdate.emit(this.selectedInvoice);
  }

  filteredBy(selectedItem) {
    this.selectedType = selectedItem;
    // MenuToggle to reverse table order 
    this.reverseOrder = this.toggleState ? "-" : "";
    this.toggleState = !this.toggleState;
    let formatedSearch = this.reverseOrder + selectedItem;
    this.selectedFilter = formatedSearch.toLowerCase().split(' ').join('');
  }
}