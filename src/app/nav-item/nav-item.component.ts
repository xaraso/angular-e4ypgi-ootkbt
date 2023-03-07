import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  public navI: any;

  public navItems = [
    { name: 'building', text: 'Centro' },
    { name: 'people', text: 'Personas' },
    { name: 'group_work', text: 'Ordenes' },
    { name: 'markunread_mailbox', text: 'Unidades' },
    { name: 'chrome_reader_mode', text: 'Checklist' },
    { name: 'group_work', text: 'Button Group2' },
    { name: 'account_circle', text: 'Avatar3' },
    { name: 'error', text: 'Badge3' },
    { name: 'group_work', text: 'Button Group3' },
    { name: 'group_work', text: 'Button Group5' },
    { name: 'account_circle', text: 'Avatar5' },
    { name: 'error', text: 'Badge5' },
  ];

  public navItemsCentro = [
    { name: '', text: 'Prueba centro' },
    { name: '', text: 'centro 2' },
    { name: 'close', text: 'aass' },
    { name: 'home', text: 'ddaa' },
  ];

  public navItemsPersonas = [
    { name: '', text: 'Prueba personas' },
    { name: '', text: 'personas 2' },
    { name: 'close', text: '534534' },
    { name: 'home', text: 'yrtyty' },
  ];

  public navItemsOrden = [
    { name: '', text: 'Inicio OF' },
    { name: '', text: 'Fin OF' },
    { name: 'close', text: 'Atras' },
    { name: 'home', text: 'inicio' },
  ];

  public selected = '';
  constructor() {
    this.navI = this.navItems;
  }

  public navigate(item: { text: string }) {
    this.selected = item.text;
  }

  cambiomenu(item: any) {
    console.log(item);
    switch (item.text) {
      case 'Centro':
        this.navI = this.navItemsCentro;
        break;
      case 'Personas':
        this.navI = this.navItemsPersonas;
        break;
      case 'Ordenes':
        this.navI = this.navItemsOrden;
        break;
      default:
        this.navI = this.navItems;
        break;
    }
  }
}
