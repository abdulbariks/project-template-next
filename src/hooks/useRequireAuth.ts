import { useCallback, useEffect, useState } from "react";

export function useRequireAuth() {
  // Implementation depends on auth provider
  const isAuthenticated = false;
  const isLoading = false;

  useEffect(() => {
    // Redirect logic here
  }, [isAuthenticated, isLoading]);

  return { isAuthenticated, isLoading };
}
