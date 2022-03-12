import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsConatinerComponent } from './tabs-conatiner/tabs-conatiner.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    ModalComponent,
    TabsConatinerComponent,
    TabComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()],
  exports: [
    ModalComponent,
    TabsConatinerComponent,
    TabComponent,
    InputComponent,
  ],
})
export class SharedModule {}
