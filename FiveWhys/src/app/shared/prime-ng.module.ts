import {NgModule} from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner'
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [],
  imports: [
    TableModule,
    TabMenuModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RippleModule,
    ProgressSpinnerModule,
    InputNumberModule,
    CalendarModule,
    ToastModule,
  ],
  exports: [
    TableModule,
    TabMenuModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RippleModule,
    ProgressSpinnerModule,
    InputNumberModule,
    CalendarModule,
    ToastModule,
  ]
})
export class PrimeNgModule {
}
