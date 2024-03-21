// Компонент для ввода поисковой строки.
// Принимает функцию func для обработки ввода и placeholder для отображения подсказки в поле ввода.
import React from 'react';

export default function SearchInput({ func, placeholder }) {
  return (
    <div>
      <input placeholder={placeholder} onChange={func} />
    </div>
  );
}
