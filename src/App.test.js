import { render, screen } from '@testing-library/react';
import App from './App';

test('Render Mish Mash', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
