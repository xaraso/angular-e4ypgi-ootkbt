import { AfterViewInit, Component } from '@angular/core';
import { IGX_INPUT_GROUP_TYPE } from 'igniteui-angular';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{ provide: IGX_INPUT_GROUP_TYPE, useValue: 'box' }],
})
export class InputComponent implements AfterViewInit {
  prueba() {
    // console.log('a ', collection[0]);

    const slides = document.getElementsByClassName('igx-input-group__bundle');

    const slide = slides[0] as HTMLElement;
    slide.style.height = '30px';
  }

  ngAfterViewInit() {
    const val = 45;
    if (val === null) {
      return;
    }
    const inputs = document.querySelectorAll('input');
    inputs.forEach((i) => {
      i.style.height = val.toString() + 'px';
    });

    const inputGroups = document.querySelectorAll(
      'igx-input-group'
    ) as NodeListOf<HTMLElement>;
    inputGroups.forEach((i) => {
      i.style.height = val.toString() + 'px';
    });
    const combo = document.querySelector('igx-combo') as HTMLElement;
    combo.style.height = val.toString() + 'px';
  }
}
