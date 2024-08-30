import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CourseComponent } from './course/course.component';
import { FilesComponent } from './files/files.component';
import { MembershipPlanComponent } from './membership-plan/membership-plan.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FillupdetailsComponent } from './fillupdetails/fillupdetails.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {path : '',redirectTo : '',pathMatch : 'full'},
  {path : '',component : HomeComponent},
  {path : 'membership-plan',component : MembershipPlanComponent},
  {path : 'watch',component : VideoPlayerComponent},
  {path : 'cities',component : CitiesComponent},
  {path : 'coming-soon',component : ComingSoonComponent},
  {path : 'fill-up',component : FillupdetailsComponent},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
