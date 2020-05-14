import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ChildComponentComponent} from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements AfterViewInit {
 getChildValue: string;
  @ViewChild (ChildComponentComponent, {static: true}) child;


  constructor() { }

  ngAfterViewInit() {
 this.getChildValue = this.child.childToParentViewChild;
  }

}
