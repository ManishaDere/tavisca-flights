import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Flights from '../Flights';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

afterEach(cleanup);

describe('Flights', function () {
  it('should render correctly', () => {
    const { asFragment } = render(<Flights />);
    expect(asFragment()).toMatchSnapshot();
  });
});
