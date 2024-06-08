import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  selectedSegment: string = 'all';

  featuredProducts = [
    { title: 'Product 1', image: 'https://via.placeholder.com/150', price: 'S$3.67' },
    { title: 'Product 2', image: 'https://via.placeholder.com/150', price: 'S$3.67' },
    { title: 'Product 3', image: 'https://via.placeholder.com/150', price: 'S$3.67' },
    { title: 'Product 4', image: 'https://via.placeholder.com/150', price: 'S$3.67' },
  ];

  newCustomerOffers = [
    { title: 'Product 1', price: 'S$16.35', discountedPrice: 'S$4.74', image: 'https://via.placeholder.com/150' },
    { title: 'Product 2', price: 'S$9.63', discountedPrice: 'S$6.06', image: 'https://via.placeholder.com/150' },
    { title: 'Product 3', price: 'S$50.34', discountedPrice: 'S$10.88', image: 'https://via.placeholder.com/150' },
    { title: 'Product 4', price: 'S$10.88', discountedPrice: 'S$6.31', image: 'https://via.placeholder.com/150' },
  ];

  flashSales = [
    { title: 'Product 5', price: 'S$26.00', discountedPrice: 'S$9.12', image: 'https://via.placeholder.com/150' },
    { title: 'Product 6', price: 'S$48.34', discountedPrice: 'S$15.82', image: 'https://via.placeholder.com/150' },
    { title: 'Product 7', price: 'S$38.00', discountedPrice: 'S$19.99', image: 'https://via.placeholder.com/150' },
    { title: 'Product 8', price: 'S$6.50', discountedPrice: 'S$4.51', image: 'https://via.placeholder.com/150' },
  ];

  constructor() { }

  ngOnInit() {
    this.startCountdown(24 * 60 * 60);
  }

  startCountdown(duration: number) {
    let timer = duration, hours, minutes, seconds;

    const hourSpan = document.getElementById('hour');
    const minuteSpan = document.getElementById('minute');
    const secondSpan = document.getElementById('second');

    setInterval(() => {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;

      const hoursStr = hours < 10 ? '0' + hours : hours.toString();
      const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
      const secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();

      if (hourSpan) hourSpan.textContent = hoursStr;
      if (minuteSpan) minuteSpan.textContent = minutesStr;
      if (secondSpan) secondSpan.textContent = secondsStr;

      if (--timer < 0) {
        timer = 0;
      }
    }, 1000);
  }
}
