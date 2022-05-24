import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import * as data from '../../../../assets/data/portfolio.json'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  cellsToShow!: number;
  arrows: boolean = true;
  showModal: boolean = false;

  portfolio: any = (data as any).default;

  constructor(
  ) {
    this.screenResponsive()
  }

  ngOnInit(): void {
  }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  screenResponsive() {
    var x = window.innerWidth;
    if (x < 576) {
      this.cellsToShow = 1;
    } else if (x >= 576 && x < 768) {
      this.cellsToShow = 1;
    } else if (x >= 768 && x < 992) {
      this.cellsToShow = 2;
    } else if (x >= 992 && x < 1200) {
      this.cellsToShow = 2;
    } else if (x >= 1200 && x < 1400) {
      this.cellsToShow = 3;
    } else if (x >= 1400) {
      this.cellsToShow = 3;
      if(this.portfolio.length <= 3){
        this.arrows = false;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenResponsive()
  }

}
