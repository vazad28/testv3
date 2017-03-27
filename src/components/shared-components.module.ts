import { TextImage } from './text-img/text-img';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [TextImage],
	imports: [CommonModule],
	exports: [TextImage]
})
export class SharedComponentsModule {
	static forRoot() {
		return {
			ngModule: SharedComponentsModule,
			providers: [ //services that you want to share across modules

			]
		}
	}
}