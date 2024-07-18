import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// This is Structural directive example

@Directive({
  selector: '[appTimes]'
})

export class TimesDirective {

  constructor(
    private viewConatinerref : ViewContainerRef,
    private templateRef : TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times : number){
    this.viewConatinerref.clear();
    for(let i = 0; i < times ; i++){
      this.viewConatinerref.createEmbeddedView(this.templateRef,{
        index: i
      })
    }
  }
}
