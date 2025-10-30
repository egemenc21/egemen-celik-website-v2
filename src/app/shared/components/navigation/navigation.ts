import {Component, effect, HostListener, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {SectionTrackerService} from '../../../core/services/section-service'
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation implements OnInit, OnDestroy {
  isScrolled: boolean = false;
  currentYear: number = new Date().getFullYear();
  activeSection: string = 'home';
  private subscription?: Subscription;

  constructor(private sectionTracker: SectionTrackerService) {
    effect(() => {
      console.log(sectionTracker.getCurrentSection(), 'sectionTracker')
      this.activeSection = sectionTracker.getCurrentSection();
    });
  }

  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  get isAboutMeSection() {
    return this.activeSection === 'about-me';
  }

  get isContentSection() {
    return this.activeSection === 'content';
  }

  get isWorkExperienceSection() {
    return this.activeSection === 'work-experience';
  }

  get isProjectsSection() {
    return this.activeSection === 'projects';
  }

  get isPortfolioHighlightsSection() {
    return this.activeSection === 'portfolio-highlights';
  }

  get isSkillsSection() {
    return this.activeSection === 'skills';
  }

  get isContactSection() {
    return this.activeSection === 'contact';
  }
}
