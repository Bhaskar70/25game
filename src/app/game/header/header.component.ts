import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  arr: any = []
  demision = '4*4';
  itemCount :number =4
  ngOnInit() {
this.changeEvent()    
  }
  changeEvent() {
    this.arr = []
    let val = 0
    console.log(this.demision)
    switch (this.demision) {
      case '4*4':
        val = 16;
        this.itemCount=4
        break;
      case '5*5':
        val = 25
        this.itemCount=5
        break;
      case '6*6':
        val = 36
        this.itemCount=6
        break;
      default:
        val = 16
    }
    console.log(val)
    for (let i = 0; i < val; i++) {
      this.arr.push(i)
    }
    console.log(this.arr)
  }
  gridStyle(val: number) {
    return `display: grid; width: 15%; grid-template-columns: repeat(${val}, 1fr);`
  }
}
