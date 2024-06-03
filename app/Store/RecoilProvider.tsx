"use client"
import { RecoilRoot } from 'recoil';
import { ReactNode } from 'react';

interface RecoilProviderProps {
    children: ReactNode;
  }

export default function RecoilProvider({ children } : RecoilProviderProps) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}