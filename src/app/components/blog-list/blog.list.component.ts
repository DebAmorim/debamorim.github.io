import { Component } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'blog-list',
  templateUrl: './blog.list.component.html',
  styleUrls: ['./blog.list.component.css']
})
export class BlogListComponent {

  constructor(
    private contentfulService: ContentfulService,
  ){}

  blogPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }
}
