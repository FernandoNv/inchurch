import {
  Component,
  computed,
  effect,
  EffectRef,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { Button } from 'primeng/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Image } from 'primeng/image';
import { InputText } from 'primeng/inputtext';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SelectButton } from 'primeng/selectbutton';
import { Textarea } from 'primeng/textarea';
import { EventService } from '../event.service';
import { ImageGeneratorService } from '../../../core/feature/image-generator/image-generator.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { IEvent, IEventDTO } from '../event';

@Component({
  selector: 'app-events-edit',
  imports: [
    Button,
    FormsModule,
    Image,
    InputText,
    ReactiveFormsModule,
    RouterLink,
    SelectButton,
    Textarea,
  ],
  templateUrl: './events-edit.component.html',
  styleUrl: './events-edit.component.scss',
})
export class EventsEditComponent implements OnDestroy {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly eventService: EventService = inject(EventService);
  private readonly imageGeneratorService: ImageGeneratorService = inject(
    ImageGeneratorService,
  );
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);
  private readonly route = inject(ActivatedRoute);
  private id = parseInt(this.route.snapshot.params['id']);
  private event = toSignal(this.eventService.getById(this.id), {
    initialValue: {} as IEvent,
  });
  private imageSrcEvent = computed(() => ({
    data: this.event().imageSrc,
    updateValueImageCount: ++this.updateValueImageCount,
  }));

  private imageSrc$: Observable<string> =
    this.imageGeneratorService.getLastImage();

  protected eventEditForm: FormGroup = this.fb.group({
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
  private updateValueImageCount = -1;
  private imageSrc = toSignal(this.imageSrc$, { initialValue: '' });
  private imageSrcService = computed(() => ({
    data: this.imageSrc(),
    updateValueImageCount: ++this.updateValueImageCount,
  }));
  protected imageSrcEdit = signal('');
  private effectRef: EffectRef;

  constructor() {
    this.effectRef = effect(() => {
      const event = this.event();
      const imageSrcService = this.imageSrcService();
      const imageSrcEvent = this.imageSrcEvent();

      this.eventEditForm.get('title')?.setValue(event?.title);
      this.eventEditForm.get('description')?.setValue(event?.description);
      this.eventEditForm.get('status')?.setValue(event?.status);
      if (
        imageSrcService.updateValueImageCount >
        imageSrcEvent.updateValueImageCount
      ) {
        this.imageSrcEdit.set(imageSrcService.data);
      } else {
        this.imageSrcEdit.set(imageSrcEvent.data);
      }
    });
  }

  ngOnDestroy(): void {
    this.effectRef.destroy();
    this.imageGeneratorService.resetToDefaultImage();
  }

  generateRandomImage(): void {
    this.imageGeneratorService.generateNewImage();
  }

  editEvent(): void {
    if (this.eventEditForm.invalid) return;

    const formData = this.eventEditForm.value;
    const newData: IEventDTO = {
      id: this.id,
      title: formData.title.trim(),
      description: formData.description.trim(),
      status: formData.status,
      imageSrc: this.imageSrcEdit(),
      createdAt: this.event().createdAt,
    };

    this.eventService.update(newData, this.id).subscribe((next) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Edição de Evento',
        detail: 'Dados atualizados com sucesso!',
      });
      setTimeout(() => this.router.navigate(['../events']), 1000);
    });
  }
}
