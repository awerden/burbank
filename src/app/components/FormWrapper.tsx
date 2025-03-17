// FormWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const JotForm = dynamic(() => import('./JotForm'), {
  ssr: false,
});

export default function FormWrapper() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <JotForm formId="250736232252147" height={800} />
    </div>
  );
}