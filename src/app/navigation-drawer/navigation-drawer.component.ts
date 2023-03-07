import { Component, HostListener, ViewChild } from '@angular/core';
import { IgxIconService, IgxNavigationDrawerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
})
export class NavigationDrawerComponent {
  public navItems = [
    { name: 'machinery', text: 'Presencia en máquina' },
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

  constructor(private iconService: IgxIconService) {}
  public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon(
      'machinery',
      '/assets/machinery.svg',
      'filter-icons'
    );
    this.iconService.addSvgIcon(
      'contains',
      'https://www.infragistics.com/angular-demos-lob/assets/images/svg/contains.svg',
      'filter-icons'
    );
    this.iconService.addSvgIcon(
      'does_not_contain',
      'https://www.infragistics.com/angular-demos-lob/assets/images/svg/does_not_contain.svg',
      'filter-icons'
    );
    this.iconService.addSvgIcon(
      'does_not_equal',
      'https://www.infragistics.com/angular-demos-lob/assets/images/svg/does_not_equal.svg',
      'filter-icons'
    );
    this.iconService.addSvgIcon(
      'ends_with',
      'https://www.infragistics.com/angular-demos-lob/assets/images/svg/ends_with.svg',
      'filter-icons'
    );
    this.iconService.addSvgIcon(
      'equals',
      'https://www.infragistics.com/angular-demos-lob/assets/images/svg/equals.svg',
      'filter-icons'
    );
    this.iconService.addSvgIcon(
      'is_empty',
      'https://www.infragistics.com/angular-demos-lob/assets/images/svg/is_empty.svg',
      'filter-icons'
    );
    this.iconService.addSvgIcon(
      'starts_with',
      'https://www.infragistics.com/angular-demos-lob/assets/images/svg/starts_with.svg',
      'filter-icons'
    );
  }
}
