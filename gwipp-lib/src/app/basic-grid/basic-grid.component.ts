import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html'
})
export class BasicGridComponent {

  rows = [
    {name: 'Storm Trooper', color: 'White'},
    {name: 'Death Trooper', color: 'Black'}
  ];

}
