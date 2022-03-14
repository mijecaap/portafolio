import { Component, AfterViewInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('myBg') myBg!: ElementRef;

  onMouseMove(e: any) {
    // // console.log(e);
    // let rect = e.target.getBoundingClientRect();
    // let x = e.clientX
    // let y = e.clientY
    // console.log(rect.left)
    // console.log(rect.top)
    // // console.log(x)
    // // console.log(y);
    // this.myBg.nativeElement.style.setProperty('--x', x + 'px');
    // this.myBg.nativeElement.style.setProperty('--y', y + 'px');
    // // this.renderer.setStyle(this.myBg.nativeElement, 'left', x + 'px')
    // // this.renderer.setStyle(this.myBg.nativeElement, 'top', y + 'px')
    // // this.myBg.setStyle('--x', x + 'px');
    // // this.myBg.setStyle('--y', y + 'px');
  }

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
  }


}
