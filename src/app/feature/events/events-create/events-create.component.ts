import { Component, inject, OnDestroy } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Button } from 'primeng/button';
import { Image } from 'primeng/image';
import { EventService } from '../event.service';
import { ImageGeneratorService } from '../../../core/feature/image-generator/image-generator.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IEventDTO } from '../event';

@Component({
  selector: 'app-events-create',
  imports: [
    InputText,
    Textarea,
    SelectButtonModule,
    ReactiveFormsModule,
    Button,
    Image,
    RouterLink,
  ],
  templateUrl: './events-create.component.html',
  styleUrl: './events-create.component.scss',
})
export class EventsCreateComponent implements OnDestroy {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly eventService: EventService = inject(EventService);
  private readonly imageGeneratorService: ImageGeneratorService = inject(
    ImageGeneratorService,
  );
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);
  private imageSrc$: Observable<string> =
    this.imageGeneratorService.getLastImage();

  protected eventCreteForm: FormGroup = this.fb.group({
    title: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(56),
        Validators.pattern(/^(?!\s*$).+/),
      ]),
    ],
    description: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^(?!\s*$).+/),
      ]),
    ],
    status: ['active', [Validators.required]],
  });

  protected eventStatusOptions: { label: string; value: string }[] = [
    { label: 'Ativo', value: 'active' },
    { label: 'Inativo', value: 'inactive' },
  ];
  protected imageSrc = toSignal(this.imageSrc$, { initialValue: '' });

  generateRandomImage(): void {
    this.imageGeneratorService.generateNewImage();
  }

  createEvent(): void {
    if (this.eventCreteForm.invalid) return;

    const formData = this.eventCreteForm.value;
    const newEvent: IEventDTO = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      status: formData.status,
      imageSrc: this.imageSrc(),
    };

    this.eventService.create(newEvent).subscribe((next) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Cadastro de Evento',
        detail: 'Cadastrado com sucesso!',
      });
      setTimeout(() => this.router.navigate(['../events']), 1000);
    });
  }

  ngOnDestroy(): void {
    this.imageGeneratorService.resetToDefaultImage();
  }
}
