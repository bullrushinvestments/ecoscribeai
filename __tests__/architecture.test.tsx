import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders component without errors', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: null, loading: true });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: null,
      loading: false,
      error: new Error('Failed to fetch data'),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
  });

  test('renders design architecture when data is available', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: ['design1', 'design2'] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design1/i)).toBeInTheDocument();
    expect(screen.getByText(/design2/i)).toBeInTheDocument();
  });

  test('handles user interaction with design elements', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: ['design1'] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/design1/i));
    expect(useExternalData).toHaveBeenCalledWith('design1');
  });

  test('checks accessibility features', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: ['design1'] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    const designElement = screen.getByText(/design1/i);
    expect(designElement).toBeVisible();
    expect(designElement).toHaveAttribute('role', 'button');
    expect(designElement).toHaveAttribute('aria-label', 'Select Design 1');
  });

  test('mocks external dependencies correctly', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: ['design1'] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    expect(useExternalData).toHaveBeenCalledWith('/api/designs');
  });

  test('handles edge cases such as empty design list', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: [] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no designs available/i)).toBeInTheDocument();
  });

  test('handles edge cases such as unexpected data structure', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { unexpectedKey: 'value' },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/unexpected data structure/i)).toBeInTheDocument();
  });

  test('checks for proper loading states', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: null, loading: true });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading designs/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders component without errors', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: null, loading: true });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: null,
      loading: false,
      error: new Error('Failed to fetch data'),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/failed to load/i)).toBeInTheDocument();
  });

  test('renders design architecture when data is available', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: ['design1', 'design2'] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design1/i)).toBeInTheDocument();
    expect(screen.getByText(/design2/i)).toBeInTheDocument();
  });

  test('handles user interaction with design elements', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: ['design1'] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/design1/i));
    expect(useExternalData).toHaveBeenCalledWith('design1');
  });

  test('checks accessibility features', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: ['design1'] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    const designElement = screen.getByText(/design1/i);
    expect(designElement).toBeVisible();
    expect(designElement).toHaveAttribute('role', 'button');
    expect(designElement).toHaveAttribute('aria-label', 'Select Design 1');
  });

  test('mocks external dependencies correctly', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: ['design1'] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    expect(useExternalData).toHaveBeenCalledWith('/api/designs');
  });

  test('handles edge cases such as empty design list', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { designs: [] },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no designs available/i)).toBeInTheDocument();
  });

  test('handles edge cases such as unexpected data structure', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({
      data: { unexpectedKey: 'value' },
      loading: false,
      error: null,
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/unexpected data structure/i)).toBeInTheDocument();
  });

  test('checks for proper loading states', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ data: null, loading: true });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading designs/i)).toBeInTheDocument();
  });
});