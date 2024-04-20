import { greet } from './main';

test('greet function returns a greeting message', () => {
  expect(greet('World')).toBe('Hello, World!');
});