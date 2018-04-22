import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoreService } from '../core/core.service';
import { OtherService } from '../other.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit, OnDestroy {

  routerEventSubscription: Subscription;
  routeParamsSubscription: Subscription;

  constructor(public coreService: CoreService, public otherService: OtherService,
    private route: ActivatedRoute, private router: Router
  ) {
    this.routerEventSubscription = this.router.events.subscribe((params) => {
      // NavigationStart, NavigationEnd, RoutesRecognized
      if (params instanceof NavigationEnd) {
        console.log('Page Two Events');
        console.log(params);
      }
    });

    this.routeParamsSubscription = this.route.params.subscribe((params) => {
      console.log('Page Two params');
      console.log(params);
    });
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
    this.routeParamsSubscription.unsubscribe();
  }
}
