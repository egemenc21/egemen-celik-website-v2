import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAnimateOnView]',
  standalone: true
})
export class AnimateOnViewDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isVisible = entry.isIntersecting;
        this.isVisibleChange.emit(isVisible);
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
