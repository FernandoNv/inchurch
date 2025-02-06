import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [Button, FormsModule, InputText, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {}
