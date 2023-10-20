import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: ReactNode; // Explicitly specify the type as ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
