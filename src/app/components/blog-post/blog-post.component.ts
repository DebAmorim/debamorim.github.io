import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from './../../services/contentful.service';
import { Observable } from 'rxjs';
import * as contentful from 'contentful';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent  implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private sanitizer: DomSanitizer,
  ) { }

  blogPost$: Observable<any> | undefined;
  blog: any;

  ngOnInit() {
    this.route.params.subscribe(
      params => {

        const id = params['id'];
        // this.getBlogPost(id);
        this.blogPost$ = this.contentfulService.getEntryById(id);
      }
    )
  }

  getBlogPost(id: any){
    this.contentfulService.getEntryById(id).subscribe(response => {
      this.blog = response.fields;    
      this.formatBody(this.blog.content);

    })
  }

formatBody(body: any) {
  // Converter o rich text para HTML
  const htmlString = documentToHtmlString(body);

  // Processar o HTML para torná-lo compatível com a renderização do Angular
  let processedHtml = htmlString
      // Processar tags <h1> para <strong> para simular negrito e tamanho da fonte maior
      .replace(/<h1>(.*?)<\/h1>/g, '<strong class="h1-font">$1</strong>')
      // Adicionar espaçamento entre parágrafos
      .replace(/<\/p><p>/g, '</p><br/><p>')
      // Substituir <hr> por uma linha horizontal
      .replace(/<hr>/g, '<hr/>');

  return processedHtml;
}

}
