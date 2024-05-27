import { Component, DoCheck, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MyExampleService } from '../../my-example.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: []
})
export class DashboardComponent implements DoCheck{
  private router = inject(Router)

  ngOnInit() {
  }

  navigateToAbout() : void {
    this.router.navigate(['/about/team'])
  }

  ngDoCheck() {
    console.log('DashboardComponent: Do I live?')
  }
}

