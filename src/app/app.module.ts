import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MyComponentComponent} from './my-component/my-component.component';
import {UserComponent} from './user/user.component';
import {ProductComponent} from './product/product.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./product.service";
import {UserDataComponent} from './user-data/user-data.component';
import {HttpClientModule} from "@angular/common/http";
import {PlayerComponent} from './player/player.component';
import {AgePipe} from './age.pipe';
import {FilterPipe} from './filter.pipe';
import {ScorePipe} from './score.pipe';
import {AppRoutingModule} from './app-routing.module';
import {PayrollComponent} from './payroll/payroll.component';
import {HrhelpdeskComponent} from './hrhelpdesk/hrhelpdesk.component';
import {ProfileComponent} from './profile/profile.component';
import {LearningComponent} from './learning/learning.component';
import {HomeComponent} from './home/home.component';
import {TechComponent} from './tech/tech.component';
import {SecurityComponent} from './security/security.component'
import {JwtClientService} from "./jwt-client.service";
import { RepeatDirective } from './repeat.directive';
import { RepeatedDirective } from './repeated.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserComponent,
    ProductComponent,
    UserDataComponent,
    PlayerComponent,
    AgePipe,
    FilterPipe,
    ScorePipe,
    PayrollComponent,
    HrhelpdeskComponent,
    ProfileComponent,
    LearningComponent,
    HomeComponent,
    TechComponent,
    SecurityComponent,
    RepeatDirective,
    RepeatedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService, JwtClientService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
