import {Component, inject, OnInit, signal} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';
import {SectionObserverDirective} from '../../directives/section-observer.directive';
import {ContentModel} from '../../../core/interfaces/content';
import {StrapiService} from '../../../core/services/strapi-service';


@Component({
  selector: 'app-content',
  imports: [
    NgOptimizedImage,
    AnimateOnViewDirective,
    NgClass,
    SectionObserverDirective
  ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content implements OnInit {
  strapiService = inject(StrapiService)

  protected isContentVisible: boolean = false;
  protected isUlVisible: boolean = false;
  contents = signal<ContentModel[]>([]);

  async ngOnInit(): Promise<void> {
    try {
      const res = await this.strapiService.getContentData();
      if (res?.data) {
        this.contents.set(res.data);
        console.log(this.contents());
      }
    } catch (error) {
      console.error('Failed to load content data:', error);
    }
  }


  isContentVisibleChange(visible: boolean) {
    this.isContentVisible = visible;
  }

  isUlVisibleChange(visible: boolean) {
    this.isUlVisible = visible;
  }
}
