import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { AnimateOnViewDirective } from '../../directives/animate-on-view.directive';
import { SectionObserverDirective } from '../../directives/section-observer.directive';

@Component({
  selector: 'app-education',
  imports: [
    AnimateOnViewDirective,
    NgClass,
    SectionObserverDirective
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  isEducationHeaderVisible = false;
  isEducationDetailVisible = false;

  onEducationHeaderVisibleChange(event: boolean) {
    this.isEducationHeaderVisible = event;
  }

  onEducationDetailVisibleChange(event: boolean) {
    this.isEducationDetailVisible = event;
  }
}
