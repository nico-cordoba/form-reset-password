'use client';
import { ThemeProvider } from '@uala/abra';

export default function ThemeProviderAbra({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
