import { Component } from '@angular/core';
import { localData } from './local-data';
@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss'],
})
export class ComboComponent {
  hola=199
  public lData: any[];

  public ngOnInit() {
    this.lData = localData;
  }
}
