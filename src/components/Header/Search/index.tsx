import React from 'react'

const Search = () => {
  return (
    <form className="search-bar__form">
      <label htmlFor="searchBar">
        <input
          type="text"
          placeholder="O Que Você Busca?"
          className="search-bar__input"
        />
      </label>

      <button className="search-bar__btn" type="submit">
        Buscar
      </button>
    </form>
  )
}

export default Search
