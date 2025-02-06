import { Component, inject, signal } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { take } from 'rxjs';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-sign-in',
  imports: [InputText, FormsModule, Button, Message, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  protected email = signal<string>('');
  protected hasErrors = signal<boolean>(false);

  protected signin(): void {
    this.auth
      .signin({ email: this.email() })
      .pipe(take(1))
      .subscribe((next) => {
        console.log(next);
        if (next.length === 0) {
          this.hasErrors.set(true);
          return;
        }
        const user = next[0];
        this.hasErrors.set(false);
        this.auth.saveToken(JSON.stringify(user));
        this.router.navigate(['events']);
      });
  }
}
