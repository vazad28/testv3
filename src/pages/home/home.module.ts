import { SharedComponentsModule } from './../../components/shared-components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),SharedComponentsModule
  ]
})
export class HomePageModule {}

