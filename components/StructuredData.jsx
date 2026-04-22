"use client";
import { useEffect } from 'react';

export default function StructuredData({ data }) {
  useEffect(() => {
    if (!data) return;

    // Crear o actualizar script de schema.org
    let script = document.querySelector('script[type="application/ld+json"][data-type="structured-data"]');
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'structured-data');
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(data);
  }, [data]);

  return null;
}
