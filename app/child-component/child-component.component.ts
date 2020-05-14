import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

 public childToParentViewChild = 'Send Data From Child To Parent using ViewChild';
  constructor() { }

  ngOnInit() {
  }

}
