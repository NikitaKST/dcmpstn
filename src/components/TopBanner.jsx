// Компонент для отображения верхнего рекламного баннера.
// Принимает ссылку на изображение img через пропс.
import React from 'react';

export default function TopBanner({ img }) {
  return (
    <div>
      <img src={img} alt="Banner" />
    </div>
  );
}
