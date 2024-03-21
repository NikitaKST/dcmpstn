/**
 * Секция с поисковой строкой и логотипом.
 * Содержит состояния для управления поисковым запросом и функции для обработки ввода и отправки запроса.
 * Использует компоненты SearchFilters, SearchInput, SearchButton, SearchPrompt.
 */
import React from 'react';
import SearchButton from './SearchButton';
import SearchFilters from './SearchFilters';
import SearchInput from './SearchInput';
import SearchPrompt from './SearchPrompt';

export default function SearchSection() {
  const arr = [];
  const func = () => {};

  return (
    <div>
      <SearchFilters filters={arr} />
      {/* Логотип */}
      <form>
        <SearchInput
          placeholder=""
          func={"сюда нужно передавать функцию для захвата состояния"}
        />
        <SearchButton onClick={func} label="" />
      </form>
      <SearchPrompt text="" />
    </div>
  );
}
