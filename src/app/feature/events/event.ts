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
