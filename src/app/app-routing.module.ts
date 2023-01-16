import { PostComponent } from './components/content/post/post.component';
import { ContentComponent } from './components/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'content/:category', component: ContentComponent },
  { path: 'search/:value', component: ContentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'content' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
