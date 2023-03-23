import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxButtonModule,
  IgxDialogModule,
  IgxRippleModule,
  IgxCardModule,
  IgxNavigationDrawerModule,
  IgxToggleModule,
  IgxAvatarModule,
  IgxFilterModule,
  IgxListModule,
  IgxInputGroupModule,
  IgxButtonGroupModule,
  IgxTabsModule,
  IgxGridModule,
  IgxComboModule,
IgxSimpleComboModule,
} from 'igniteui-angular';
import { GridSelectionTemplateExcelComponent } from './grid-sample-selection-template-excel/grid-sample-selection-template-excel.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import { ListViewComponent } from './list-view/list-view.component';
import { IgxDialogComponent } from './igx-dialog/igx-dialog.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IgxPreventDocumentScrollModule } from './directives/prevent-scroll.directive';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';
import { ComboComponent } from './combo/combo.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    GridSelectionTemplateExcelComponent,
    NavigationDrawerComponent,
    ListViewComponent,
    IgxDialogComponent,
    NavItemComponent,
    ButtonsComponent,
    TabsComponent,
    InputComponent,
    ComboComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxCardModule,
    IgxRippleModule,
    IgxNavigationDrawerModule,
    IgxToggleModule,
    IgxGridModule,
    IgxAvatarModule,
    IgxFilterModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxPreventDocumentScrollModule,
    IgxTabsModule,
    IgxComboModule,
    IgxSimpleComboModule,

  ],
  providers: [],
  entryComponents: [],
  schemas: [],
})
export class AppModule {}
