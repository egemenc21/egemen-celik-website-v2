import { Component, HostListener, signal } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { AnimateOnViewDirective } from '../../directives/animate-on-view.directive';
import { Content } from '../content/content';
import {AboutMeComponent} from '../about-me/about-me.component';
import {VisionMissionComponent} from '../vision-mission/vision-mission.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, AnimateOnViewDirective, NgClass, Content, AboutMeComponent, VisionMissionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isMobile: boolean = false;
  screenWidth!: number;

  isShown = signal(false);
  egemenVisible: boolean = false;
  celikVisible: boolean = false;

  toggle() {
    this.isShown.update((isShown) => !isShown);
  }

  ngOnInit() {
    this.checkViewport();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth < 768;
  }
  onTitleVisibilityChange(visible: boolean) {
    this.celikVisible = visible;
    this.egemenVisible = visible;
  }
}
