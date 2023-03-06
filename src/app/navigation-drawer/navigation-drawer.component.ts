import { Component, HostListener, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
})
export class NavigationDrawerComponent {
  public navItems = [
    { name: 'account_circle', text: 'Presencia en máquina' },
    { name: 'error', text: 'Tareas' },
    { name: 'group_work', text: 'Ordenes' },
    { name: 'account_circle', text: 'Incidencias' },
    { name: 'error', text: 'CheckList' },
    { name: 'account_circle', text: 'Documentos' },
    { name: 'error', text: 'Mensajería' },
    { name: 'group_work', text: 'Datos Tubo' },
  ];

  public selected = 'Avatar';

  public navigate(item) {
    this.selected = item.text;
  }

  @ViewChild(IgxNavigationDrawerComponent, { static: false })
  public drawer: IgxNavigationDrawerComponent;
  @HostListener('window:keydown.esc', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.drawer.toggle();
  }
}
