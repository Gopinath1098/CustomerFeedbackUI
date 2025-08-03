import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Feedback } from './feedback/feedback';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Feedback],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('customer_feedback_UI');
}
