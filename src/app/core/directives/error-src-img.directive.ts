import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appErrorSrcImg]'
})
export class ErrorSrcImgDirective {

  @Input() type: string;
  constructor(
    private imgElement: ElementRef
  ) { }

  @HostListener('error')
  loadFallbackOnError(): void {
    const IMAGES = {
      company: './assets/images/default-image.png',
    };
    const element: HTMLImageElement = this.imgElement.nativeElement as HTMLImageElement;
    element.src = IMAGES[this.type];
  }

}
