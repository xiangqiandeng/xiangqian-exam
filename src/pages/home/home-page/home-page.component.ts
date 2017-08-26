import { Component, OnInit } from '@angular/core';

interface Hotel {
  hotelName: string;
  hotelImage: string;
  mile: number;
  mark: number;
  price: number;
  lastModify: string;
  random?: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  hotels: Array<Hotel>;
  firstLine: string;
  constructor() {
   this.gethotels();
  }

  gethotels() {
     this.hotels = [
      {hotelName: '博龙国际大酒店', hotelImage: 'bolong.png', mile: 1.5, mark: 4.4, price: 390, lastModify: '1天前'},
      {hotelName: '云睿酒店', hotelImage: 'yunrui.png', mile: 5.5, mark: 4.5, price: 370, lastModify: '2天前'},
      {hotelName: '上海浦江精选酒店虹桥枢纽会展中心店', hotelImage: 'niuqu.png', mile: 3.5, mark: 4.7, price: 107, lastModify: '3天前'},
      {hotelName: '上海欧亚美阳光酒店', hotelImage: 'yangguan.png', mile: 10.5, mark: 4.45, price: 330, lastModify: '3天前'}
    ];
    this.firstLine = `第一家酒店是：${this.hotels[0].hotelName}`;
  }

  asc() {
    // 正序排列
    this.hotels.sort((a, b) => {
      if (a.mile > b.mile) {
        return 1;
      }else {
        return -1;
      }
    });
  }

  desc() {
    // 逆序排列 
    this.hotels.sort((a, b) => {
      if (a.mile < b.mile) {
        return 1;
      }else {
        return -1;
      }
    });
  }

  ascByPrice() {
    this.hotels.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }else {
        return -1;
      }
    });
  }

  random() {
    this.hotels.forEach((hotel) => {
      const randomNum = Math.random();
      hotel.random = randomNum;
    });

    this.hotels.sort((a, b) => {
      if (a.random > b.random) {
        return 1;
      }else {
        return -1;
      }
    });
  }
  ngOnInit() {
  }

}
