import { main } from '../main';

describe('main', () => {
  it('doesnt crash', () => {
    expect(() => {
      main();
    }).not.toThrow();
  });
});
