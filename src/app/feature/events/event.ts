export interface IEvent {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  status: 'active' | 'inactive';
  createdAt: string;
}
