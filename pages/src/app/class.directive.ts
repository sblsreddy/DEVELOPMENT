import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  
  constructor(private element : ElementRef) {     
    console.log('Custom directive class used');
    
  }

  @Input('appClass') set backgroundColor(color : string){
    this.element.nativeElement.style.backgroundColor = color;
  }

}

/**
 *  Communcation from Parent to child component.....
 * 
 * In Parent component template ( in this scenario parent is app.component.html)
 *  <app-card [title] = " 'snowyMountains' "> </app-card>
 * 
 * In Child component class ( in this scenario the child is class.directive.ts)
 * we import like import {input} from '.angular'
 * 
 * class childComponent{
 *    @Input() title:string;
 * }
 */
