// Универсальный компонент для отображения кнопки поиска.
// Принимает обработчик onClick и текст label для отображения на кнопке.
import React from 'react';

export default function SearchButton({ onClick, label }) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}
