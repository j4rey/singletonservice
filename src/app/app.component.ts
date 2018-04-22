import { CoreService } from './core/core.service';
import { Component } from '@angular/core';
import { OtherService } from './other.service';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public coreService: CoreService, public otherService: OtherService, private route: ActivatedRoute
  , private router: Router
  ) {
    // this.route.params.subscribe((params) => {
      this.router.events.subscribe((params) => {
      console.log(params);
      console.log(params instanceof NavigationEnd); // NavigationStart, NavigationEnd, RoutesRecognized
    });
  }
}
