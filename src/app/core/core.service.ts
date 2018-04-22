import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';



@Injectable()
export class CoreService {
    _userName = 'Sherlock Holmes';

    constructor(private router: Router) {
        console.log('CoreService constructor');
        // this.router.events.subscribe((params) => {
        //     console.log(params);
        //     console.log(params instanceof NavigationEnd); // NavigationStart, NavigationEnd, RoutesRecognized
        //   });
    }

    get getUserName(): string {
        return this._userName;
    }
}
