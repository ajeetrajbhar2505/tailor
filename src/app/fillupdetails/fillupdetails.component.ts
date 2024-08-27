import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fillupdetails',
  templateUrl: './fillupdetails.component.html',
  styleUrls: ['./fillupdetails.component.scss'],
})
export class FillupdetailsComponent implements OnInit {
  @Output() OncloseEvent: EventEmitter<boolean> = new EventEmitter()
  @Input() set Onclose(close: any) {
    this.closed = close
    this.OncloseEvent.emit(close)
  }
  closed:boolean=  true
  @Input() amount: number = 0
  @Input() Image: string = ""

  closePopup() {
    this.OncloseEvent.emit(false)
  }

  constructor() { }

  ngOnInit() { }

}
