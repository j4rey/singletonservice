import { CoreService } from './core/core.service';
import { Component, OnDestroy } from '@angular/core';
import { OtherService } from './other.service';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  routerEventSubscription: Subscription;
  routeParamsSubscription: Subscription;

  constructor(public coreService: CoreService, public otherService: OtherService, private route: ActivatedRoute
  , private router: Router
  ) {
    this.routerEventSubscription = this.router.events.subscribe((params) => {
      // NavigationStart, NavigationEnd, RoutesRecognized
      if (params instanceof NavigationEnd) {
        console.log('App Events');
        console.log(params);
      }
    });

    this.routeParamsSubscription = this.route.params.subscribe((params) => {
      console.log('App params');
      console.log(params);
    });
  }

  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
    this.routeParamsSubscription.unsubscribe();
  }
}
