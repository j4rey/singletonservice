import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';
import { OtherService } from '../other.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit {

  constructor(public coreService: CoreService, public otherService: OtherService, private route: ActivatedRoute) {
    // this.route.params.subscribe((params) => {
    //   console.log(params);
    // });
  }

  ngOnInit() {
  }

}
