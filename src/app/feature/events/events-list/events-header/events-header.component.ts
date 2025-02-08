import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-events-header',
  imports: [Button, IconField, InputIcon, InputText],
  templateUrl: './events-header.component.html',
  styleUrl: './events-header.component.scss',
})
export class EventsHeaderComponent {}
