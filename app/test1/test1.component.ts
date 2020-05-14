import {Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

 @Input() public getParentFullName: string;
 @Input() public getParentCompany: string;
 @Input() public getParentLocation: string;
 counter = 0;
 childToParentViewChild = 'Send Data from Child To Parent using ViewChild';

 @Output() public childToParent = new EventEmitter();


 passDataFromChild() {
 this.childToParent.emit('PAssing Data From Test1Component To AppComponent');
 }

  // counter = 0;
    IncreaseNumber(): void {
        this.counter++;
    }

  constructor() { }

  ngOnInit() {
  }


}
