// section-observer.directive.ts
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { SectionTrackerService } from '../../core/services/section-service';

@Directive({
  selector: '[appSectionObserver]',
  standalone: true
})
export class SectionObserverDirective implements OnInit, OnDestroy {
  @Input() sectionId!: string;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private sectionService: SectionTrackerService) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.sectionService.setActiveSection(this.sectionId);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -99% 0px'
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
