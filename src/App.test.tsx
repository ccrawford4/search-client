import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the correct test', async () => {
    render(<App />);
  expect(await screen.findByText("Welcome to my search engine!")).toBeInTheDocument();
});
