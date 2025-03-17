'use client';

import { useEffect, useRef } from 'react';

interface JotFormProps {
  formId: string;
  height?: number;
}

export default function JotForm({ formId, height = 539 }: JotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (container.childNodes.length === 0) {
      const script = document.createElement('script');
      script.src = `https://form.jotform.com/jsform/${formId}`;
      script.async = true;
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [formId]);

  return (
    <div 
      id={`jotform-${formId}`}
      ref={containerRef}
      style={{ width: '100%', height: `${height}px` }}
    />
  );
}