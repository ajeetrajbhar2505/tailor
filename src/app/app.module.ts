import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CourseComponent } from './course/course.component';
import { FilesComponent } from './files/files.component';
import { MembershipPlanComponent } from './membership-plan/membership-plan.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { WebService } from './web.service';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FillupdetailsComponent } from './fillupdetails/fillupdetails.component';
import { BannerComponent } from './banner/banner.component';
import { CitiesComponent } from './cities/cities.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    ProfileInfoComponent,
    VideoPlayerComponent,
    CourseComponent,
    FilesComponent,
    MembershipPlanComponent,
    ComingSoonComponent,
    FillupdetailsComponent,
    FlashMessageComponent,
    BannerComponent,
    CitiesComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },WebService],
  bootstrap: [AppComponent],
  exports :[FillupdetailsComponent]
})
export class AppModule {}
