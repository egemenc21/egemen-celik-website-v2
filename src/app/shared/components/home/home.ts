import {Component, effect, HostListener, inject, OnInit, signal} from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { AnimateOnViewDirective } from '../../directives/animate-on-view.directive';
import { Content } from '../content/content';
import {AboutMeComponent} from '../about-me/about-me.component';
import {VisionMissionComponent} from '../vision-mission/vision-mission.component';
import {WorkExperienceComponent} from '../work-experience/work-experience.component';
import {PortfolioHighlightsComponent} from '../portfolio-highlights/portfolio-highlights.component';
import {ProjectsComponent} from '../projects/projects.component';
import {SkillsComponent} from '../skills/skills.component';
import {ContactComponent} from '../contact/contact.component';
import {SectionObserverDirective} from '../../directives/section-observer.directive';
import {StrapiService} from '../../../core/services/strapi-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, AnimateOnViewDirective, NgClass, Content, AboutMeComponent, VisionMissionComponent, WorkExperienceComponent, PortfolioHighlightsComponent, ProjectsComponent, SkillsComponent, ContactComponent, SectionObserverDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  isMobile: boolean = false;
  screenWidth!: number;

  egemenVisible: boolean = false;
  celikVisible: boolean = false;

  name:string = 'Egemen';
  surname:string = 'Celik';

  strapiService = inject(StrapiService);

  async ngOnInit() {
    console.log(await this.strapiService.getHomeData())
    this.checkViewport();
    const homeResponse= await this.strapiService.getHomeData();
    debugger
    this.name = homeResponse.data.name;
    this.surname = homeResponse.data.surname;

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
