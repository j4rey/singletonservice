import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';
import { OtherService } from '../other.service';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {

  constructor(public coreService: CoreService, public otherService: OtherService) { }

  ngOnInit() {
  }

}
