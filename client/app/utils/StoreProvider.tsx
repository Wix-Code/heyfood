'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ContextProvider from './context';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        {children}
      </ContextProvider>
    </QueryClientProvider>
  );
}