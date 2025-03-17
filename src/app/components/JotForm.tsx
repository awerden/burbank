'use client';

import { useEffect, useRef } from 'react';

interface JotFormProps {
  formId: string;
  height?: number;
}

export default function JotForm({ formId, height = 539 }: JotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Only append the script if the container is empty
    if (containerRef.current.childNodes.length === 0) {
      const script = document.createElement('script');
      script.src = `https://form.jotform.com/jsform/${formId}`;
      script.async = true;
      containerRef.current.appendChild(script);
    }

    return () => {
      // Remove all children from container on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [formId]);

  return (
    <div
      id={`jotform-${formId}`}
      ref={containerRef}
      style={{ width: '100%', height: '100%' }}
    />
  );
}