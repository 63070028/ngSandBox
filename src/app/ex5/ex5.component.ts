import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.scss']
})
export class Ex5Component{
  boxs:number[] = [1, 2, 3, 4, 5, 6, 7, 8]
  
  @ViewChild("boxElement") boxElement?:ElementRef<HTMLDivElement>;
  
  @ViewChildren("boxElements") boxElements!:QueryList<ElementRef>;
  @ViewChildren("boxToggleElements") boxToggleElements!:QueryList<ElementRef>;
  
  ngOnInit(){
      console.log(this.boxElement)
  }

  ngAfterViewInit(){
    if(this.boxElement != undefined){
      console.log(this.boxElement.nativeElement)
    }
    
    this.boxElements.forEach(e => {console.log(e.nativeElement)})
  }

  changeBgToggle(e:HTMLDivElement){
    if(e.classList[0] === 'bg-warning'){
      e.classList.replace('bg-warning', 'bg-danger')
    }
    else{
      e.classList.replace('bg-danger', 'bg-warning')
    }
  }

  changeBgSelect(taget:HTMLDivElement){
    this.boxToggleElements.map(box => box.nativeElement.classList.replace('bg-danger', 'bg-warning'))
    taget.classList.replace('bg-warning', 'bg-danger')
  }


}
