import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appBgColorChange]',
})
export class BgColorChangeDirective {

  @Output() appBgColorChange = new EventEmitter<Subscription>()
  

  random_bg_color = new Observable<string>((subscriber) => {
    const indexInterval = setInterval(() => {
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      subscriber.next('rgb(' + x + ',' + y + ',' + z + ')');
    }, 1000);

    return {
      unsubscribe() {
        clearInterval(indexInterval);
      },
    };
  });

  subscription: Subscription = this.random_bg_color.subscribe(res => {
    this.el.nativeElement.style.backgroundColor = res;
    this.appBgColorChange.emit(this.subscription)
  })

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event']) unsub(){
      this.subscription.unsubscribe();
  }



}
