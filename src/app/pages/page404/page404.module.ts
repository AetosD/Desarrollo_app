import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Page404PageRoutingModule } from './page404-routing.module';
import { Page404Page } from './page404.page';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core'
import { ModuloModule } from 'src/app/components/modulo/modulo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page404PageRoutingModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    ModuloModule
  ],
  declarations: [Page404Page]
})
export class Page404PageModule {}
