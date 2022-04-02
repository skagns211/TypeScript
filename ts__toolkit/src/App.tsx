import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./component/Movies";
import Movie from "./component/Movie";
import { createGlobalStyle } from "styled-components";

function App() {
  const [data, setData] = useState<any[]>();
  const handleGetData = (data: []): void => {
    setData(data);
  };
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Movies handleGetData={handleGetData} />}
          ></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black
  }
`;

export default App;
