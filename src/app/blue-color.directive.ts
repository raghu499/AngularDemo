import { Directive,ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[bluecoloured]'
})
export class BlueColorDirective implements OnInit {

  constructor(private element : ElementRef) { 
  
  }

  ngOnInit(){
     this.element.nativeElement.style.color="blue";
  }
}
