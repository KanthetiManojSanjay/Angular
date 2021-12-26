import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appRepeated]',
  exportAs: 'repeat,changeText'
})
export class RepeatedDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

  repeatElement(count: number) {
    for (let i = 0; i < count; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  changeElementText(count: number) {
    for (let i = 0; i < count; i++) {
      document.getElementsByTagName('p')[i].innerHTML = "Text is changed ..."
    }
  }

}
