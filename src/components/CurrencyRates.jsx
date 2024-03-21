// Компонент для отображения курсов валют.
// Принимает массив arr, где каждый элемент представляет информацию о валюте (name, value, dif).
import React from 'react';

export default function CurrencyRates({ arr }) {
  return (
    <div>
      {arr.map((item) => (
        <React.Fragment key={item.name}>
          <p>{item.name}</p>
          <p>{item.value}</p>
          <p>{item.dif}</p>
        </React.Fragment>
      ))}
    </div>
  );
}
