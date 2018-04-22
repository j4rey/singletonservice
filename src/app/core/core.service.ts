import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';



@Injectable()
export class CoreService {
    _userName = 'Sherlock Holmes';
    routerEventSubscription: Subscription;
    routeParamsSubscription: Subscription;

    constructor(private route: ActivatedRoute, private router: Router) {
        console.log('CoreService constructor');
        this.routerEventSubscription = this.router.events.subscribe((params) => {
            // NavigationStart, NavigationEnd, RoutesRecognized
            if (params instanceof NavigationEnd) {
              console.log('Core Service Events');
              console.log(params);
            }
          });

          this.routeParamsSubscription = this.route.params.subscribe((params) => {
            console.log('Core Service params');
            console.log(params);
          });
    }

    get getUserName(): string {
        return this._userName;
    }
}
