import {Component} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';
import {SectionObserverDirective} from '../../directives/section-observer.directive';

@Component({
  selector: 'app-portfolio-highlights',
  imports: [
    NgOptimizedImage,
    AnimateOnViewDirective,
    NgClass,
    SectionObserverDirective
  ],
  templateUrl: './portfolio-highlights.component.html',
  styleUrl: './portfolio-highlights.component.css'
})
export class PortfolioHighlightsComponent {
  isPortfolioHighlights: boolean = false;

  onPortfolioHighlightsChange(event: boolean) {
    this.isPortfolioHighlights = event;
  }
}
