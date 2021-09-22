/*import React, { useState, useEffect } from "react";

const Advice = ({}) => {
  const handleAddFavorite = () => {};

  const handleNextAdvice = () => {
    //console.log("handleNextAdvice", Math.floor(Math.random() * (725 + 1)));
    const x = Math.floor(Math.random() * (725 + 1));
    //setIdAdvice(x);
    setPreId(x);
    console.log("valueIdAdvice", idAdvice);
    console.log("valuepreAdvice", preId);
  };

  return (
    <div>
      <h1 className="text-center">Concejo del día</h1>
      {advice ? (
        <>
          <p className="text-wrap" key={Math.floor(Math.random() * (725 + 1))}>
            {advice}
          </p>
        </>
      ) : (
        <h4>Cargando..</h4>
      )}
      {advice && (
        <div className="d-flex justify-content-evenly">
          <button
            onClick={handleAddFavorite}
            className="btn btn-primary btn-sm"
          >
            Marcar como Favorito
          </button>
          <button onClick={handleNextAdvice} className="btn btn-primary btn-sm">
            Siguiente concejo
          </button>
        </div>
      )}
    </div>
  );
};

export default Advice;
*/
