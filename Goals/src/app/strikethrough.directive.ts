import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { }

  // single click shows complete by doing a strikethrough
  @HostListener("click") onClicks() {
    this.textDeco("line-through")
  }

  // double click shows incomplete by removing the strikethrough
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration = action;
  }

}
