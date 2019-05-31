import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-list',
  templateUrl: './expandable-list.component.html'
})
export class ExpandableListComponent implements OnInit {

  listItems = ['item 1', 'item 2'];

  constructor() { }

  ngOnInit() {
  }

}
