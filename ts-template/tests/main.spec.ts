import { main } from '../main.ts';

describe('main', () => {
  it('doesnt crash', () => {
    expect(() => {
      main();
    }).not.toThrow();
  });
});
