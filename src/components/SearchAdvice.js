//import React, { useState } from "react";
//import PropTypes from "prop-types";
//import Favorite from "./Favorite";
//
//const SearchAdvice = ({ advice, getWeatherData }) => {
//  const [valueSearch, setValueSearch] = useState("");
//  return (
//    <div>
//      <h1>Buscador de concejos</h1>
//      <div>
//        <input
//          type="text"
//          value={valueSearch}
//          onChange={(e) => setValueSearch(e.target.value)}
//        />
//        <button
//          onClick={() => {
//            getWeatherData(valueSearch);
//          }}
//        >
//          GET
//        </button>
//        <h3>Resultados de la búsqueda</h3>
//        <h3>{advice ? (advice.forEach((item, index) => {
//            <h4 key={index}>item</h4>
//            <button className={() => handleAddFavorite(item)}>Marcar como Favorita</button>
//
//        })): ("no existe datos")}</h3>
//        <div>
//          <hr />
//        </div>
//      </div>
//    </div>
//  );
//};
//Favorite.propTypes = {
//  advice: PropTypes.shape({
//    advice: PropTypes.string,
//  }),
//  valueSearch: PropTypes.string,
//  getWeatherData: PropTypes.func,
//};
//export default SearchAdvice;
