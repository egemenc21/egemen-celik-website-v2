import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation implements OnInit {
  isScrolled: boolean = false;
  isOnContentSection = false;
  currentYear = new Date().getFullYear();
  isAboutMeSection = false;
  isWorkExperienceSection: boolean = false;
  isPortfolioHighlightsSection: boolean = false;

  ngOnInit() {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const viewportHeight = window.innerHeight;

    this.isOnContentSection = scrollPosition >= viewportHeight * 0.95 && scrollPosition < viewportHeight * 1.95;
    this.isAboutMeSection = scrollPosition >= viewportHeight * 1.95 && scrollPosition < viewportHeight * 3.90;
    this.isWorkExperienceSection = scrollPosition >= viewportHeight * 3.90 && scrollPosition < viewportHeight * 4.95;
    this.isPortfolioHighlightsSection = scrollPosition >= viewportHeight * 4.95
    this.isScrolled = scrollPosition > 50;
  }
}
