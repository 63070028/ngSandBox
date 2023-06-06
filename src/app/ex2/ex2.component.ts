import { Component } from '@angular/core';
import { Observable, Subject, Subscription, share } from 'rxjs';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss'],
})
export class Ex2Component {

  timerObservable$ = new Observable<number>((observer) => {
    let i = 0;
    const index = setInterval(() => {
      i++
      observer.next(i);
    }, 1000);

    return {
      unsubscribe() {
          clearInterval(index);
      },
    }
  });


  
  observer1:number = 0;
  observer2:number = 0;
  observer3:number = 0;

  observer4:number = 0;
  observer5:number = 0;
  observer6:number = 0;

  observer7:number = 0;
  observer8:number = 0;
  observer9:number = 0;
  
  subscriptions:Subscription = new Subscription();
  subject:Subject<number> = new Subject<number>();

  ngOnInit() {


    this.subscriptions.add(this.timerObservable$.subscribe(res => this.observer1 = res))
    this.subscriptions.add(this.timerObservable$.subscribe(res => this.observer2 = res))
    setTimeout(()=>{
      this.subscriptions.add(this.timerObservable$.subscribe(res => {
        this.observer3 = res;
      }));
    }, 5000);


    this.subscriptions.add(this.timerObservable$.subscribe(this.subject));
    this.subject.subscribe(res => this.observer4 = res);
    this.subject.subscribe(res => this.observer5 = res);
    setTimeout(()=>{
      this.subject.subscribe(res => this.observer6 = res);
    }, 5000);

    const shareTimer = this.timerObservable$.pipe(share())
    this.subscriptions.add(shareTimer.subscribe(res => this.observer7 = res))
    this.subscriptions.add(shareTimer.subscribe(res => this.observer8 = res))
    setTimeout(()=>{
      this.subscriptions.add(shareTimer.subscribe(res => this.observer9 = res))
    }, 5000);


  }

}
