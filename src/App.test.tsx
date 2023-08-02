import App from '@/App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<App />);
});

describe('<App />', () => {
  describe('The App component should be displayed on the screen', () => {
    test('App renderer', () => {
      const title = screen.getByText(/REACT PROFESSIONAL CONFIGURATION!/);

      expect(title).toBeInTheDocument();
    });
  });

  describe('Counter', () => {
    test('Counter should start at 0', () => {
      const counterButton = screen.getByText(/counter 0/i);
      expect(counterButton).toBeInTheDocument();
    });

    test('Counter should increment when the button is clicked', async () => {
      const counterButton = screen.getByText(/counter 0/i);
      await userEvent.click(counterButton);

      const updatedCounterButton = screen.getByText(/counter 1/i);
      expect(updatedCounterButton).toBeInTheDocument();
    });
  });
});
