import { Component, OnInit } from '@angular/core';
import {
  DisplayDensity,
  IgxColumnComponent,
  IgxFilterOptions,
} from 'igniteui-angular';
import { DATA } from '../data/customers';
import { COLUMNAS } from '../data/header';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  public data: any[];
  public columnas: any[];

  constructor() {
    this.data = DATA;
    this.columnas = COLUMNAS;
  }
  public columnInit(args: IgxColumnComponent) {
    // args.autosize();
    this.columnas.forEach((e: any) => {
      if (args.field == e.Nombre) {
        if (e.Ancho < 0) {
          args.width = 'auto';
        } else if (e.Ancho > 0) {
          args.width = e.Ancho;
        } else {
          args.hidden = true;
        }
      }
    });
  }
}
