import {Directive, ElementRef, Renderer2, OnInit, OnDestroy, Output, EventEmitter, Input} from '@angular/core';

@Directive({
  selector: '[appAnimateOnView]',
  standalone: true
})
export class AnimateOnViewDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  private hasAnimated = false;

  @Input() animateOnce: boolean = false; // New input property
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isVisible = entry.isIntersecting;

        // If animateOnce is true and already animated, don't emit
        if (this.animateOnce && this.hasAnimated && isVisible) {
          return;
        }

        if (isVisible && !this.hasAnimated) {
          this.hasAnimated = true;
        }

        this.isVisibleChange.emit(isVisible);
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
