import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputText } from 'primeng/inputtext';
import { InputIcon } from 'primeng/inputicon';
import { CardComponent } from '../../../ui/card/card.component';
import { IEvent } from '../event';

const MOCK_EVENT: IEvent = {
  id: 1,
  imageSrc: 'images/1.jpg',
  title: 'Deus é tudo na minha vida, mais preciso de duas linhas!',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  status: 'inactive',
  createdAd: '2025/02/07',
};

@Component({
  selector: 'app-events-list',
  imports: [Button, IconField, InputText, InputIcon, CardComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss',
})
export class EventsListComponent {
  protected readonly MOCK_EVENT = MOCK_EVENT;
  times = [1, 2, 3, 4, 5, 6, 7, 8];
}
