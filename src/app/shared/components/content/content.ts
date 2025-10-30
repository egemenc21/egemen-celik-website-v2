import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';
import {SectionObserverDirective} from '../../directives/section-observer.directive';

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
export class Content {
  protected isContentVisible: boolean = false;
  protected isUlVisible: boolean = false;

  isContentVisibleChange(visible: boolean) {
   this.isContentVisible = visible;
  }

  isUlVisibleChange(visible: boolean) {
   this.isUlVisible = visible;
  }
}
