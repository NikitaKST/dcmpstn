// Обертка для секций контента. Принимает заголовок title и children (контент секции).
import React from 'react';

export default function ContentSection({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
