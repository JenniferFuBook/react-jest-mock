import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const someContent = screen.getByText('locale: en');
  expect(someContent).toBeInTheDocument();
});
