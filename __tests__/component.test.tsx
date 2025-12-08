import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any) => {
    return jest.fn().mockReturnValue({
      data,
      loading: false,
      error: null,
    });
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    useExternalData.mockReturnValue({ loading: true, error: null });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('status'));
  });

  test('handles errors gracefully and displays an error message', async () => {
    const errorMessage = 'Failed to fetch data';
    useExternalData.mockReturnValue({
      loading: false,
      error: new Error(errorMessage),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(errorMessage));
  });

  test('allows user interaction with buttons and updates state accordingly', () => {
    const mockUpdateState = jest.fn();
    useExternalData.mockReturnValue({
      data: { id: '123', name: 'Product A' },
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent updateState={mockUpdateState} />);

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(mockUpdateState).toHaveBeenCalledWith({ id: '123', name: 'Product A' });
  });

  test('ensures accessibility features are properly implemented', () => {
    useExternalData.mockReturnValue({
      data: { id: '123', name: 'Product A' },
      loading: false,
      error: null,
    });
    render(<CoreFunctioninalityComponent />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'Add Product A to Cart');
  });

  test('mocks external dependencies and ensures proper data handling', () => {
    useExternalData.mockReturnValue({
      data: { id: '123', name: 'Product A' },
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);

    const product = screen.getByText(/product a/i);
    expect(product).toBeInTheDocument();
  });

  test('handles edge cases such as empty data or unexpected data types', () => {
    useExternalData.mockReturnValue({
      data: undefined,
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const errorMessage = 'No products available';
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any) => {
    return jest.fn().mockReturnValue({
      data,
      loading: false,
      error: null,
    });
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    useExternalData.mockReturnValue({ loading: true, error: null });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('status'));
  });

  test('handles errors gracefully and displays an error message', async () => {
    const errorMessage = 'Failed to fetch data';
    useExternalData.mockReturnValue({
      loading: false,
      error: new Error(errorMessage),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(errorMessage));
  });

  test('allows user interaction with buttons and updates state accordingly', () => {
    const mockUpdateState = jest.fn();
    useExternalData.mockReturnValue({
      data: { id: '123', name: 'Product A' },
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent updateState={mockUpdateState} />);

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(mockUpdateState).toHaveBeenCalledWith({ id: '123', name: 'Product A' });
  });

  test('ensures accessibility features are properly implemented', () => {
    useExternalData.mockReturnValue({
      data: { id: '123', name: 'Product A' },
      loading: false,
      error: null,
    });
    render(<CoreFunctioninalityComponent />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'Add Product A to Cart');
  });

  test('mocks external dependencies and ensures proper data handling', () => {
    useExternalData.mockReturnValue({
      data: { id: '123', name: 'Product A' },
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);

    const product = screen.getByText(/product a/i);
    expect(product).toBeInTheDocument();
  });

  test('handles edge cases such as empty data or unexpected data types', () => {
    useExternalData.mockReturnValue({
      data: undefined,
      loading: false,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const errorMessage = 'No products available';
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

});