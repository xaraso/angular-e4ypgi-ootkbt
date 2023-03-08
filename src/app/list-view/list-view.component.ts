import { Component, OnInit } from '@angular/core';
import { DisplayDensity, IgxFilterOptions } from 'igniteui-angular';
import { DATA } from '../data/customers';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  public data: any[];

  constructor() {
    this.data = DATA;
  }
}
