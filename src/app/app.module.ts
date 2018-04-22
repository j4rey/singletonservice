import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { CoreModule } from './core/core.module';
import { OtherService } from './other.service';

const testRoute: Route[] = [
  { path: 'one', component: PageoneComponent},
  { path: 'two/:id', component: PagetwoComponent},
  { path: 'two', component: PagetwoComponent},
  // { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(testRoute)
  ],
  providers: [OtherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
