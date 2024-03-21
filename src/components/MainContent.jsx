// Компонент для отображения основного контента (новости, реклама, курсы валют). Использует компоненты NewsSection, SideAdvertising, CurrencyRates.
import React from 'react';
import CurrencyRates from './CurrencyRates';
import NewsSection from './NewsSection';
import SideAdvertising from './SideAdvertising';


export default function MainContent() {
  const headerTitles = [
    {
      title: '',
      href: ''
    },
    {
      title: '',
      href: ''
    }
  ];

  const currencyArr = [
    {
      name: '',
      value: '',
      dif: ''
    }
  ];

  return (
    <div>
      <NewsSection news={[]} />
      <SideAdvertising title="" text="" img="" />
      <CurrencyRates arr={currencyArr} />
    </div>
  );
}

