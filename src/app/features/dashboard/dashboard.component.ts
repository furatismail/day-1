import { Component, inject } from '@angular/core';
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
export class DashboardComponent {
  private router = inject(Router)


  navigateToAbout() : void {
    this.router.navigate(['/about/team'])
  }
}

