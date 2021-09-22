/*
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
//import Advice from "./Advice";
import Favorite from "./Favorite";
import axios from "axios";

import SearchAdvice from "./SearchAdvice";
function App() {
  const [adviceInfo, setAdviceInfo] = useState([]);
  const [indexAdvice, setIndexAdvice] = useState(null);
  const [adviceFavorite, setAdviceFavorite] = useState([{}]);
  const [adviceSearch, setAdviceSearch] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [valueString, setValueString] = useState("");
  const [validator, setValidator] = useState([]);
  /*
  useEffect(() => {
    const getData__ = async () => {
      const res__ = await fetch(`https://api.adviceslip.com/advice/33`);
      try {
        //SUPER ERROR LA ESTRUCTURACIÓN DEL JSON LE FALTA UN "}" AL FINAL DE LA LLAMADA
        const resp = await res__.json();
        console.log("indexAdvice__laksdflkajsdñlfkjasdñlkjf", resp);
      } catch (e) {
        console.log("erro", e);
      }
      setAdviceFavorite(res__);

      console.log("indexAdvice__________", res__);
      console.log("indexAdvice__________2", res__.Response);
    };

    getData__();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const results = await res.json();
      setAdviceInfo(results.slip.advice);

      const res__ = await fetch(
        `https://api.adviceslip.com/advice/search/money`
      );
      const results__ = await res__.json();
      setAdviceSearch(results__.slips);
    };
    getData();
  }, []);

  const getWeatherData = (valueString) => {
    axios({
      method: "GET",
      url: `https://api.adviceslip.com/advice/search/valueString`,
    })
      .then((response) => {
        console.log("indexaxios", valueString);
        console.log("valueaxios", response.data.slip);
        setValidator(response.data.slip.advice);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (indexAdvice) {
      const getData = async () => {
        const res = await fetch(`https://api.adviceslip.com/advice`);
        const results = await res.json();
        setAdviceInfo(results.slip.advice);

        const res__ = await fetch(
          `https://api.adviceslip.com/advice/search/${searchWord}`
        );
        const results__ = await res__.json();
        setAdviceSearch(results__.slips);
      };

      getData();
      console.log("advicerinfo", adviceInfo);
      console.log("adviceSearch", adviceSearch);
    }
  }, [indexAdvice]);

  const handleNextAdvice = (value) => {
    setIndexAdvice((prevState) => prevState - prevState + value);
    console.log(indexAdvice);
    const x = "spiders";
    setSearchWord(x);
  };

  const handleAddFavorite = (value) => {

    if (adviceFavorite[adviceFavorite.length] !== value) {
      console.log("descartando la repeticion");
    } else {
    }


    setAdviceFavorite([...adviceFavorite, value]);
    console.log("lenght", adviceFavorite.length);
    console.log("lenghtsjlkfajsñdf", adviceFavorite[adviceFavorite.length - 1]);
    console.log("value", value);
    console.log("handleAddFavorite", adviceFavorite);
    let fly = false;
    if (adviceFavorite.length - 1 > 5) {
      adviceFavorite.forEach((item, index) => {
        console.log(`item${index}`, item);
        if (item === value) {
          fly = true;
        }
      });
    }

    console.log("fly", fly);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="auto">
          <button
            onClick={() => handleAddFavorite(adviceInfo)}
            className="btn btn-primary btn-sm"
          >
            Marcar como favorito
          </button>
          <button
            onClick={() =>
              handleNextAdvice(Math.floor(Math.random() * (224 - 0 + 1)) + 0)
            }
            className="btn btn-primary btn-sm"
          >
            Siguiente concejo
          </button>
        </Col>
        <Col md="auto">Bienvenido</Col>
        <Col xs lg="auto">
          <Favorite />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <hr />{" "}
        <Col xs="auto" lg="auto">
          <input
            type="text"
            value={valueString}
            onChange={(e) => setValueString(e.target.value)}
          />
          <button
            onClick={() => {
              getWeatherData(valueString);
            }}
          >
            GET
          </button>

          <h3>{validator}</h3>
        </Col>{" "}
        <SearchAdvice advice={adviceSearch} getWeatherData={getWeatherData} />
      </Row>
    </Container>
  );
}

export default App;
*/
