import { Component, Input, OnChanges } from '@angular/core';
import { Invoice } from '../classes/invoice';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('small <=> large', animate('600ms ease', 
        keyframes([
          style({
            opacity: 0, offset: 0 }),
          style({
            opacity: 1, offset: 1 })
        ]))),
      ]),
    ]
})

export class InvoiceDetailComponent implements OnChanges {
  @Input() invoice: Invoice;
  @Input() onInvoiceMasterChange: boolean = false;
  props: string[] = ['Type', 'Account Name', 'Status', 'Currency', 'Balance', 'Notes'];
  notes: string = 'Lorem ipsum dolor sit amet, consectetur';
  imgPath: string =  '../../assets/images/';
  clickState: string = 'small';

  ngOnChanges() {
    if (!this.onInvoiceMasterChange) {
      this.clickState = 'large';
    } else {
      this.clickState = 'small';
    }
  }
}
