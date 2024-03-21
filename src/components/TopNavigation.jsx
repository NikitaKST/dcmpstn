// Компонент для отображения верхней навигационной панели.
// Принимает массив заголовков titles и отображает каждый заголовок как ссылку <a>.
// Также отображает текущую дату.
import React from 'react';

export default function TopNavigation({ titles }) {
  const date = new Date();

  return (
    <div>
      {titles.map((item) => (
        <a key={item.href} href={item.href}>
          {item.title}
        </a>
      ))}
      <p>{date.toDateString()}</p>
    </div>
  );
}
