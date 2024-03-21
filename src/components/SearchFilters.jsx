// Компонент для отображения фильтров поиска.
// Принимает массив filters и отображает каждый элемент в виде тега <p>.
import React from 'react';

export default function SearchFilters({ filters }) {
  return (
    <div>
      {filters.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
