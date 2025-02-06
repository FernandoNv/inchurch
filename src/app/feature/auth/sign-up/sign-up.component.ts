import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Router, RouterLink } from '@angular/router';
import { Message } from 'primeng/message';
import { AuthService, IUser } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [
    Button,
    FormsModule,
    InputText,
    ReactiveFormsModule,
    RouterLink,
    Message,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected signupForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  protected signup(): void {
    const values = this.signupForm.value as IUser;
    this.authService.signup(values).subscribe((next) => {
      console.log('Usuario cadastrado');
      this.router.navigate(['']);
    });
  }
}
