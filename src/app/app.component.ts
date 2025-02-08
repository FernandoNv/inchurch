import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, RouterOutlet, Toast],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, DatePipe],
})
export class AppComponent {
  title = 'inchurch';
}
