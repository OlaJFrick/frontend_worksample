import { Component, Input, OnChanges } from '@angular/core';
import { Invoice } from '../classes/invoice';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      state('in', style({opacity: '1'})),
      transition('void => *', [
        style({opacity: '0'}),
        animate('600ms 50ms ease')
      ])
    ]),
    trigger('fadeBetweenAnimation', [
      transition('in <=> out', animate('600ms ease', 
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
  @Input('invoice') invoice: Invoice;
  @Input() onMasterUpdate: boolean = false;
  props: string[] = ['Type', 'Account Name', 'Status', 'Currency', 'Balance', 'Notes'];
  notes: string = 'Lorem ipsum dolor sit amet, consectetur';
  imgPath: string =  '../../assets/images/';
  clickState: string = 'in';

  ngOnChanges() {
    if (!this.onMasterUpdate) {
      this.clickState = 'out';
    } else {
      this.clickState = 'in';
    }
  }

  closeCard() {
    this.invoice = null;
  }

}
