import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @Input('appInputFormat') format: string;
  
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = 
      this.format === "uc" ? value.toUpperCase() :
      this.format === "lc" ? value.toLowerCase() :
      value;
  }
}
