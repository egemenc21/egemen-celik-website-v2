import { Component } from '@angular/core';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';
import {NgClass} from '@angular/common';
import {SectionObserverDirective} from '../../directives/section-observer.directive';

@Component({
  selector: 'app-vision-mission',
  imports: [
    AnimateOnViewDirective,
    NgClass,
    SectionObserverDirective
  ],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.css'
})
export class VisionMissionComponent {
  isVisionVisible = false;
  isMissionVisible: boolean = false;

  onVisionVisibleChange(event: boolean) {
    this.isVisionVisible = event;
  }

  onMissionVisibleChange(event: boolean) {
    this.isMissionVisible = event;
  }
}
