export interface IEvent {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface IEventDTO {
  id?: number;
  title: string;
  description: string;
  status: string;
  imageSrc: string;
  createdAt?: string;
}

const MAX_STRING_LENGTH = 65;
export function formatDescriptionFn(value: string): string {
  if (value.length >= MAX_STRING_LENGTH) {
    return value?.slice(0, MAX_STRING_LENGTH) + '...';
  }

  return value;
}

export function formatStatusFn(value: string): string {
  if (value === 'active') {
    return 'Ingressos ativos';
  }

  return 'Sem ingressos ativos';
}
