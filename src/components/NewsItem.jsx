// Компонент для отображения отдельной новости. Принимает объект новости item через пропс и отображает логотип, заголовок и ссылку на статью.
import React from 'react';

export default function NewsItem({ item }) {
  const { logo, title, href } = item;

  return (
    <div>
      <img src={logo} alt="Logo" />
      <a href={href}>{title}</a>
    </div>
  );
}
