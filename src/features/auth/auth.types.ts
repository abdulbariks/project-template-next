export interface AuthState {
  user: Record<string, unknown> | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
  [key: string]: unknown;
}
