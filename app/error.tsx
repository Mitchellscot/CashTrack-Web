'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container-fluid container-lg d-flex flex-column">
      <h1>An error occured</h1>
      <p>Sorry, looks like an error occured.</p>
    </main>
  );
}
