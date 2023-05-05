import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  api: any
  constructor(private common: CommonService) { }
  ngOnInit() {
    console.log('product list')
    this.common.getapi().subscribe(res => {
      this.api = res
      console.log(this.api)
    })
  }
}
