import { Component } from '@angular/core';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [
    AnimateOnViewDirective,
    NgClass
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  isExperienceHeaderVisible = false;
  isExperienceListVisible = false;
  onExperienceHeaderVisibleChange(event: boolean) {
    this.isExperienceHeaderVisible = event;
  }
  onExperienceListVisibleChange(event: boolean) {
    this.isExperienceListVisible= event;
  }
}
