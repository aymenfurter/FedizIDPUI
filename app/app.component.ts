import {Component} from '@angular/core';
import {ClaimsComponent} from './claims.component';

@Component({
    selector: 'my-app',
    template: `<div class="row">                    
    			<claims></claims>
                    
                </div>`,
	directives: [ClaimsComponent]
})
export class AppComponent { }
