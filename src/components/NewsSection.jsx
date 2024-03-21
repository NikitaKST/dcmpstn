// секция с новостями. Принимает массив новостей через пропс news и отображает их с помощью компонента NewsItem.
import React from 'react';
import NewsItem from './NewsItem';

export default function NewsSection({ news }) {
  return (
    <div>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
}
