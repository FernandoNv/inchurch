import { CardCreatedAtFormatterPipe } from './card-created-at-formatter.pipe';

describe('CardCreatedAtFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CardCreatedAtFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
