import {Component} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';

@Component({
  selector: 'app-portfolio-highlights',
  imports: [
    NgOptimizedImage,
    AnimateOnViewDirective,
    NgClass
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
