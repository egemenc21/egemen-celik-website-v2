import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {AnimateOnViewDirective} from '../../directives/animate-on-view.directive';

@Component({
  selector: 'app-about-me',
  imports: [
    NgOptimizedImage,
    AnimateOnViewDirective,
    NgClass
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  isAboutMeVisible: boolean = false;
  isAboutMeParagraphVisible: boolean = false;
  onAboutMeVisibleChange(event:boolean) {
    this.isAboutMeVisible = event;
  }

  onAboutMeParagraphVisibleChange(event: boolean) {
    this.isAboutMeParagraphVisible = event;
  }
}
