import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CoreService } from './core.service';

@NgModule({
    providers: [CoreService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
