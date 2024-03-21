// Компонент для отображения дополнительного контента (погода, посещенные сайты, карта и т.д.). Использует компоненты TopBanner, ContentSection, FeaturedItem.
import React from 'react';
import ContentSection from './ContentSection';
import FeaturedItem from './FeaturedItem';
import TopBanner from './TopBanner';


export default function FeaturedContent() {
  const posts = [
    // массив постов с разными ключами
    {}, {}, {}
  ];

  return (
    <div>
      <TopBanner img={'адрес для подгрузки картинки'} />
      <div>
        {posts.map((item) => (
          <ContentSection key={item.id} title={item.title}>
            <FeaturedItem item={item} />
          </ContentSection>
        ))}
      </div>
    </div>
  );
}