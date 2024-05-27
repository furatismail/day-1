import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  private route = inject(ActivatedRoute);
  photos: any;
  constructor() {
    this.route.data.subscribe((data) => {
      this.photos = data?.['photos']
      console.log(this.photos)
    })
  }

}
