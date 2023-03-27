import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  prueba() {
    // console.log('a ', collection[0]);

    const slides = document.getElementsByClassName('igx-input-group__bundle');

    const slide = slides[0] as HTMLElement;
    slide.style.height = '30px';
  }
}
