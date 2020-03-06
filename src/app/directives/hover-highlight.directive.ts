import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective implements OnInit {
  @Input('appHoverHighlight') highlightColor: string;

  constructor(private ref: ElementRef) { }

  ngOnInit(): void {
    this.ref.nativeElement.classList.add('app-highlight');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || null);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.ref.nativeElement.style.color = color;
  }
}
