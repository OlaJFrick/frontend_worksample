import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../classes/invoice';
import { InvoiceService } from '../services/invoice.service';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('sideBarAnimation', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate('0.4s ease')
      ]),
      transition('* => void', [
        animate('0.2s ease', style({transform: 'translateX(100%)'}))
        ])
    ]),
    trigger('menuAnimation', [
      transition('* => *', [
        query(':enter', style({ transform: 'translateX(100%)' }), {optional: true}),
        query(':enter', stagger('170ms ease', [
          animate('200ms 300ms linear', keyframes([
            style({transform: 'translateX(100%)', offset: 0}),
            style({transform: 'translateX(-3px)', offset: 0.5}),
            style({transform: 'translateX(0)', offset: 1.0}),
          ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('1s linear', keyframes([
            style({transform: 'translateX(0)', offset: 0}),
            style({transform: 'translateX(100%)', offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ],
  providers: [InvoiceService]
})

export class HomeComponent implements OnInit {
  @Output() FilterChange = new EventEmitter();
  @Output() sidebarUpdate = new EventEmitter();
  invoices: Invoice[];
  selectedInvoice: Invoice;
  heading: string = 'All invoices - 2017';
  currentFilter: string;
  selectedIcon = 'dots';
  iProps = ['Type', 'Account Name', 'Status', 'Currency', 'Balance'];
  invoiceUpdate: boolean = false;
  isOpen: boolean = false;
  menuItems = [];
  menuClickToggle: boolean = false;
 
  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(): void {
    this.invoiceService.getInvoices().then(invoices => this.invoices = invoices);
  }

  updateSorting() {
    this.menuItems.length ? this.hideItems() : this.showItems();
    this.selectedIcon = (this.selectedIcon === 'dots' ? 'close-round' : 'dots');
  }

  handleUpdate($event) {
    this.invoiceUpdate = !this.invoiceUpdate;
    this.selectedInvoice = $event;
  }

  showItems() {
    this.menuItems = ['Sort by Type of invoice', 'Sort by Account Name', 'Sort by Status', 'Sort by Currency Type', 'Sort after Balance'];
  }
 
  hideItems() {
    this.menuItems= [];
  }
  
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  updateFilter(arg, i) {
    this.menuClickToggle = !this.menuClickToggle;
    let filterName; 

    if (i == 0) {
      filterName = 'Type';
    } else if (i == 1 ) {
      filterName = 'Account Name';
    } else if (i == 2 ) {
      filterName = 'Status';
    } else if (i == 3 ) {
      filterName = 'Currency';
    } else {
      filterName = 'Balance';
    }
    this.currentFilter = filterName;
  }

}