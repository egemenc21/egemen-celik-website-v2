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
  isOnContentSection: boolean = false;
  currentYear = new Date().getFullYear();

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
    
    this.isOnContentSection = scrollPosition >= viewportHeight * 0.8; 
    this.isScrolled = scrollPosition > 50;
  }
}
