import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/client';
import { SigInButton } from '.';

jest.mock('next-auth/client');
const useSessionMocked = jest.mocked(useSession);

describe('SigInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SigInButton />);

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  });

  it('renders correctly when user is authenticated', () => {
    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'Jhon Doe',
          email: 'jhon.doe@example.com',
        },
        expires: 'fake-expires',
      },
      true,
    ]);

    render(<SigInButton />);

    expect(screen.getByText('Jhon Doe')).toBeInTheDocument();
  });
});
