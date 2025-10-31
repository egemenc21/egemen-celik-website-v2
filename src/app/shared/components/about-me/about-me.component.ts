import {Component, inject, OnInit, signal} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';
import {SectionObserverDirective} from '../../directives/section-observer.directive';
import {StrapiService} from '../../../core/services/strapi-service';
import {AboutMeModel} from '../../../core/interfaces/about-me';

@Component({
  selector: 'app-about-me',
  imports: [
    NgOptimizedImage,
    AnimateOnViewDirective,
    NgClass,
    SectionObserverDirective
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit {
  strapiService = inject(StrapiService)

  isAboutMeVisible: boolean = false;
  isAboutMeParagraphVisible: boolean = false;
  aboutMeData = signal<AboutMeModel | null>(null);

  async ngOnInit(): Promise<void> {
    try {
      const res = await this.strapiService.getAboutMeData();
      if (res?.data) {
        this.aboutMeData.set(res.data);
      }
    } catch (error) {
      console.error('Failed to load About Me data:', error);
    }
  }


  onAboutMeVisibleChange(event:boolean) {
    this.isAboutMeVisible = event;
  }

  onAboutMeParagraphVisibleChange(event: boolean) {
    this.isAboutMeParagraphVisible = event;
  }
}
