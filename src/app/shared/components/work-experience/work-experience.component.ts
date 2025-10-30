import { Component } from '@angular/core';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';
import {NgClass} from '@angular/common';
import {SectionObserverDirective} from '../../directives/section-observer.directive';

@Component({
  selector: 'app-work-experience',
  imports: [
    AnimateOnViewDirective,
    NgClass,
    SectionObserverDirective
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  isExperienceHeaderVisible = false;
  isExperienceListVisible = false;
  isWorkExperienceVisible: boolean = false;

  onExperienceHeaderVisibleChange(event: boolean) {
    this.isExperienceHeaderVisible = event;
  }
  onExperienceListVisibleChange(event: boolean) {
    this.isExperienceListVisible= event;
  }
  onWorkExperienceVisibleChange(event: boolean) {
    this.isWorkExperienceVisible = event;
  }
}
