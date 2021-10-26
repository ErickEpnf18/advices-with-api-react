//add text to do merging with repo cloud
import React, { useState, useEffect } from "react";
import Testing from "./Testing";
//import { PoweroffOutlined } from "@ant-design/icons";
import { Form, Button, Input } from "antd";
import "../styles/Advice.css";
const SuperAdvice = () => {
  const [advice, setAdvice] = useState([]);
  //const [access, setAccess] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [search, setSearch] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [adviceFavorite, setAdviceFavorite] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const results = await response.json();
      setAdvice(results.slip);
    };
    getData();
  }, [loadingBtn]);
  useEffect(() => {
    const getData = async () => {
      if (search !== "") {
        const res =
          await fetch(`https://api.adviceslip.com/advice/search/${search}
        `);
        const respo = await res.json();
        setSearchInfo(respo.slips);
      }
    };
    getData();
  }, [search]);

  function handleShowMe() {
    setLoadingBtn(!loadingBtn);

    /*
    console.log(advice, "advicehandleShowMe", " ", access);
    i++;
    i++;
    console.log("ErickEpnf18", i);
    i++;
    console.log("ErickEpnf18", i);
    // setAccess(!access);

    console.log(advice, "--advicehandleShowMe--", " ", access);

     */
  }
  /*
  const handleShowMeTime = () => {
    setTimeout(handleShowMe, 1000);
    clearTimeout(handleShowMe);
  };*/

  const handleSearch = (values) => {
    console.log("values", values.search);
    setSearch(values.search);
    console.log(searchInfo, "searchInfo");
    //setSearchValues(values.search);
    //setCurrentPage(1);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("errorInfo:", errorInfo);
  };

  const handleAddFavorite = (value) => {
    if (adviceFavorite.length === 0) {
      setAdviceFavorite((prevState) => [...prevState, value]);
    } else {
      const newAdvices = adviceFavorite.filter((advice) => advice === value);
      if (newAdvices.length === 0) {
        setAdviceFavorite((prevState) => [...prevState, value]);
      }
    }
  };

  const handleDeleteAdvice = (value) => {
    const newTodos = adviceFavorite.filter((advice) => advice !== value);
    setAdviceFavorite(newTodos);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h1>Concejos del día</h1>
              <div className="container-advice">
                <div className="">
                  <div id="results">
                    {advice ? (
                      <Testing advice={advice} key={advice.id} />
                    ) : (
                      "no existe datos"
                    )}
                  </div>
                </div>
                <div className="container-btn">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddFavorite(advice.advice)}
                  >
                    Marcar como favorita
                  </button>
                  <button className="btn btn-primary" onClick={handleShowMe}>
                    siguiente concejo
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <h1>Consejos Favoritos</h1>
              {adviceFavorite
                ? adviceFavorite.map((item, index) => (
                    <div key={index} className="container-favorite">
                      <div id="results">
                        <p key={index}>{item}</p>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDeleteAdvice(item)}
                      >
                        eliminar concejo
                      </button>
                    </div>
                  ))
                : "no existe datos"}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>Buscador de consejos</h1>
              <div className="container-search">
                <Form
                  className="container-form"
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={handleSearch}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Buscar Concejo:"
                    name="search"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese el título de la busqueda",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="btn-advice"
                      type="primary"
                      htmlType="submit"
                    >
                      Buscar
                    </Button>
                  </Form.Item>
                </Form>

                {searchInfo
                  ? searchInfo.map((item, index) => (
                      <div key={index} className="container-search">
                        <p id="results" key={index}>
                          {item.advice}
                        </p>{" "}
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddFavorite(item.advice)}
                        >
                          marcar como favorita
                        </button>
                      </div>
                    ))
                  : "no existe coincidencia en la busqueda"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdvice;
