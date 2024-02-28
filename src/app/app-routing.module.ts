import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogListComponent } from './components/blog-list/blog.list.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

const routes: Routes = [
  {path: 'home', component: HomePage},
  {path: '', component: HomePage},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogListComponent},
  {path: 'blog/:id', component: BlogPostComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
