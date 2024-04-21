import { screen } from '@testing-library/dom';
import '@testing-library/dom';
import { loadHtml } from '../test-utils';

import { greet } from './script';

test('greet function returns a greeting message', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('Can access DOM', () => {
  loadHtml();

  const h1 = screen.getByTestId('h1');
  expect(h1?.textContent).toBe('HTML/CSS/TypeScript Project Starter');
})