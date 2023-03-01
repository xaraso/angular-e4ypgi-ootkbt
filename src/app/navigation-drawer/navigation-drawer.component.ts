import { Component, HostListener, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent {
  public navItems = [
    { name: 'account_circle', text: 'Avatar' },
    { name: 'error', text: 'Badge' },
    { name: 'group_work', text: 'Button Group' }
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
