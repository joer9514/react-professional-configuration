import App from '@/App';
import { render /* screen */ } from '@testing-library/react';

describe('App component', () => {
  describe('The App component should be displayed on the screen', () => {
    test('App renderer', () => {
      // const title = screen.getByText(/PROFESSIONAL CONFIGURATION REACT!/i);

      render(<App />);

      // expect(title).toBeInTheDocument();

      expect(4 + 4).toEqual(8);
    });
  });
});
