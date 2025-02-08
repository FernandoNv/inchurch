import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Toast, ConfirmDialog],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DatePipe, ConfirmationService, MessageService],
})
export class AppComponent {
  title = 'inchurch';
}
