import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsConatinerComponent } from './tabs-conatiner/tabs-conatiner.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    ModalComponent,
    TabsConatinerComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    TabsConatinerComponent,
    TabComponent
  ]
})
export class SharedModule { }
