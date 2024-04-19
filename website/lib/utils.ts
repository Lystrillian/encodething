import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function normalizeLineEndings(value: string, lineEnding: 'LF' | 'CR' | 'CRLF'): string {
  let normalized = value;

  if (lineEnding === 'LF') {
    normalized = normalized.replace(/\r\n|\r/g, '\n');
  } else if (lineEnding === 'CRLF') {
    normalized = normalized.replace(/\r\n|\r|\n/g, '\r\n');
  } else if (lineEnding === 'CR') {
    normalized = normalized.replace(/\r\n|\n/g, '\r');
  }

  return normalized;
}
