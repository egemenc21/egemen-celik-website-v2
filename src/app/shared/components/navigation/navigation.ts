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
    console.log(scrollPosition, viewportHeight);

    this.isAboutMeSection = scrollPosition >= viewportHeight * 1.95;
    this.isOnContentSection = scrollPosition >= viewportHeight * 0.95 && !this.isAboutMeSection;
    this.isScrolled = scrollPosition > 50;
  }
}
